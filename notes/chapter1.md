<h2>公式の導出</h2>
<button onclick="toggleFold('derivation')">導出を表示/非表示</button>

<div id="derivation" style="display: none; border-left: 2px solid #ccc; padding-left: 10px; margin-top: 5px;">
  <p>ステップ1: 定義から始める…</p>
  <p>ステップ2: 式を変形…</p>
  <p>ステップ3: 最終結果…</p>
</div>

<script>
function toggleFold(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "none") ? "block" : "none";
}
</script>
