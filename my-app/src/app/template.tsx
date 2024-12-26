export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className='template'>
      <h2>I am Template</h2>
      {children}
    </div>
  )
}
