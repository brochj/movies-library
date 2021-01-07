export default function PostTitle({ children }) {
  return (
    <h1 className="dark:text-gray-100 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}
