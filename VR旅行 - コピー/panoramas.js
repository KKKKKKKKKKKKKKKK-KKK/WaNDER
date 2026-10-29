// パノラマ一覧
// URL の ?p=<キー> で表示する画像を選ぶ。例: index.html?p=room1
// 画像を追加するときは panos/ フォルダに置いて、ここに 1 行足すだけでよい。
//
//   file     : 画像ファイルのパス（Equirectangular / 2:1 の JPG）
//   title    : 読み込み中などに表示する名前
//   rotation : 最初に向いている方向（度）。正面をずらしたいときに Y を変える
const PANORAMAS = {
  test1: { file: "panos/test1.png", title: "テスト画像 1", rotation: 0 },
  test2: { file: "panos/test2.png", title: "テスト画像 2", rotation: 0 },
  plant: { file: "panos/test plant.jpg", title: "プラント", rotation: 0 },
  itukushima: { file: "panos/ItukushimaSheimon.jpg", title: "厳島神社", rotation: 0 },
  // room1: { file: "panos/room1.jpg", title: "部屋 1", rotation: 0 },
};
