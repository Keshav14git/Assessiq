
import "./globals.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Assessiq - Next Generation Assessment Platform',
  keywords: 'AI, interview, website, service',
  description: 'Interview and Assessment with Monaco',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
     
      <html lang="en" suppressHydrationWarning>
             <body className={"antialiased"}>
            
                 {children}
               
               
             </body>
           </html>
          
     
  );
}