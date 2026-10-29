# VR旅行

Blender でレンダリングしたパノラマ画像を、Meta Quest 2/3・スマホ（Cardboard）・PC ブラウザで見るための WebXR ビューア（A-Frame 1.6.0）。

## 使い方

- `index.html?p=<キー>` を開くと、`panoramas.js` に登録した画像を表示する。
- 画像を追加するときは `panos/` に置いて `panoramas.js` に 1 行足す。

## ローカルで確認

```bash
node tools/server.js
```

http://localhost:8080/?p=test1 を開く。テスト画像は `node tools/make-test-panos.js` で作り直せる。

## Blender のレンダリング設定

- レンダーエンジン: Cycles
- カメラ: Type = Panoramic、Panorama Type = Equirectangular
- カメラの回転: X = 90°, Y = 0°（水平）。カメラが向いている方向がビューアの正面になる
- 解像度: 4096 × 2048（必ず 2:1）
- 出力: JPEG、Quality 90 前後、カラー RGB
