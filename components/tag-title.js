export default function TagTitle({ tag }) {
    return (
      <>  
        <div className="mb-5 flex items-baseline">
            <p className="mr-2 dark:text-white text-2xl md:text-4xl font-bold tracking-tighter leading-tight">
                # 
            </p>
            <h2 className="dark:text-white text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </h2>
        </div>
        <hr className="mb-3 border-2 rounded-xl "/>
      </>
    )
  }