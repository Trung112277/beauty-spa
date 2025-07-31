import { cn } from "@/lib/utils";
import { TitleSecondary } from "../../../common/title/Title-secondary";
import { UsefulMenu } from "@/components/feature/nav/useful-menu/Useful-menu";
import { useTranslation } from 'react-i18next';

export function UsefulLinks({ className }: { className?: string }){
    const { t } = useTranslation();
    return (
        <div className={cn('flex flex-col gap-8', className)}>
            <TitleSecondary title={t('useful_links')} />
            <UsefulMenu />
        </div>
    );
}