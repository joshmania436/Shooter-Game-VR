AFRAME.registerComponent("tank", {
  init: function () {
    setInterval(this.shootEnemyBullet, 2000);
  },
  shootEnemyBullet: function () {
    var els = document.querySelectorAll(".enemy");
    for (var i = 0; i < els.length; i++) {
      var enemyBullet = document.createElement("a-entity");
      enemyBullet.setAttribute("geometry", {
        primitive: "sphere",
        radius: 0.1,
      });
      enemyBullet.setAttribute("material", "color", "black");

      var pos = els[i].getAttribute("position");
      enemyBullet.setAttribute("");
    }
  },
});
