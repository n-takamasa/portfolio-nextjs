import "@/styles/globals.scss";

export const metadata = {
  title: {
    default: 'フロントエンドエンジニア ポートフォリオ',
    template: '%s | フロントエンドエンジニア ポートフォリオ'
  },
  description: "制作会社を中心にWeb制作・フロントエンド開発に携わるフロントエンドエンジニアのポートフォリオ。HTML / CSS（SCSS）を用いたマークアップから、React / Next.js による実装まで対応。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body cz-shortcut-listen="true">
        <header className="l-header">
          <div className="l-header__inner">
            <p className="l-header__logo">
              Portfolio
            </p>
          </div>
        </header>

        <main className="l-main">
          {children}
        </main>

        <footer className="l-footer">
          <p className="l-footer__copy">
            &copy; {new Date().getFullYear()} Portfolio
          </p>
        </footer>
      </body>
    </html>
  );
}
