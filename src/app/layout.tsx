import "@/styles/globals.scss";

export const metadata = {
  title: "Portfolio",
  description: "Frontend Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
