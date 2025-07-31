import { cn } from "@/lib/utils";
import { HeadingSecondary } from "../../../common/heading/Heading-secondary";
import { UsefulMenu } from "@/components/feature/nav/useful-menu/Useful-menu";
import { useTranslation } from 'react-i18next';

export function UsefulLinks({ className }: { className?: string }){
    const { t } = useTranslation();
    return (
        <div className={cn('flex flex-col gap-8', className)}>
            <HeadingSecondary title={t('useful_links')} />
            <UsefulMenu />
        </div>
    );
}