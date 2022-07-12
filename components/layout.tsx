interface LayoutProps {
    title?: string;
    children: React.ReactNode;
}

export default function Layout({
    title
}: LayoutProps) {
    return <div>
        <div className="bg-white w-full text-lg font-medium py-3 
         text-gray-800 border-b justify-center flex ">
            {title ? <span>{title}</span> : null}
        </div>
    </div>;
}