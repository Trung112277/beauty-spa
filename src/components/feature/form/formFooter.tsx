'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormFooter } from '../../../hooks/useFormFooter';
import { Send } from 'lucide-react';

export function FormFooter() {
  const { form, onSubmit, loading } = useFormFooter();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 relative"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="ENTER YOUR EMAIL"
                  {...field}
                  className="rounded-none bg-white h-[40px] text-sm focus-visible:ring-0 pr-[55px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="rounded-none bg-primary h-[40px]  hover:brightness-90 absolute right-0 top-0"
          aria-label="Send email"
          style={{ marginTop: 0 }}
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full inline-block"></span>
          ) : (
            <Send className="text-foreground" />
          )}
        </Button>
      </form>
    </Form>
  );
}
