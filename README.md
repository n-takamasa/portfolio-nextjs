# Portfolio（Next.js）

フロントエンドエンジニアのポートフォリオサイトです。  
制作会社案件を想定し、構造設計・コンポーネント分割・CSS設計を重視して構築しています。

---

## 技術スタック

- Next.js（App Router）
- React
- TypeScript
- SCSS
- FLOCSS / BEM
- Vercel

---

## 構成・設計方針

### コンポーネント設計

- ページ固有のセクションは `p-`（Project）
- 再利用可能なUIは `c-`（Component）
- 単機能クラスは `u-`（Utility）

FLOCSS をベースに、  
React コンポーネントと CSS の責務が混ざらない構成を意識しています。

---

### page.tsx / layout.tsx の責務分離

- `page.tsx`  
  ページを構成するコンポーネントの並びのみを担当

- `layout.tsx`  
  共通レイアウト（header / main / footer）と  
  グローバルスタイル・metadata を管理

App Router の思想に沿った役割分担を行っています。

---

## noindex 設定について

本サイトは **意図的に noindex を設定**しています。

```ts
robots: {
  index: false,
  follow: false,
}
