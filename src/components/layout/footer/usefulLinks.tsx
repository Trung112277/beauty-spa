import { cn } from "@/lib/utils";
import { TitleFooter } from "./titleFooter";
import { UsefulMenu } from "@/components/feature/navMenu/usefulMenu/usefulMenu";
import { useTranslation } from 'react-i18next';

export function UsefulLinks({ className }: { className?: string }){
    const { t } = useTranslation();
    return (
        <div className={cn('flex flex-col gap-8', className)}>
            <TitleFooter title={t('useful_links')} />
            <UsefulMenu />
        </div>
    );
}