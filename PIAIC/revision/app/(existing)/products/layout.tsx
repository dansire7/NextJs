export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <div>
      
      {children}
      <h1>child layout</h1>
    </div>
  );
  
}
