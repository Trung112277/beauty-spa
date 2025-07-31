import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "@/hooks/useToast"
import { useState } from "react"

export const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export function useFormFooter() {
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "You submitted the following values:",
        description: JSON.stringify(data, null, 2),
      })
    } finally {
      setLoading(false)
    }
  }

  return { form, onSubmit, loading }
} 