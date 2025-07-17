import { cn } from "@/lib/utils";
import { TitleFooter } from "./titleFooter";
import { UsefulMenu } from "@/components/feature/nav-menu/usefulMenu";

export function UsefulLinks({ className }: { className?: string }){
    return (
        <div className={cn('flex flex-col gap-8', className)}>
            <TitleFooter title="Useful links" />
            <UsefulMenu />
        </div>
    );
}