interface props {
    /** Title of the card */
    title?: string;
    /** Additional classes for the card */
    className?: string;
    /** Content of the card */
    children: React.ReactNode;
}

const Card: React.FC<props> = ({ title, className = "", children }) => {
    return (
        <div className={"border-primary border-2 p-8 rounded-lg " + className}>
            {title &&
                <h2 className="text-primary text-2xl font-bold mb-8">{title}</h2>
            }
            <section className="pr-4 overflow-x-clip text-ellipsis">
                {children}
            </section>
        </div>
    );
}

export default Card;