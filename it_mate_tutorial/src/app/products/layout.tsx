
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <ol>
        <li>Order</li>
        <li>return</li>
      </ol>
                  {children}
        <h3> Kuch sochna parega In layouts availabel in products folder </h3>
        
        </>
                  )
  }
  