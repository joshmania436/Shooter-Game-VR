AFRAME.registerComponent("bullets", {
  init: function () {
    this.shootBullet();
  },
  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var bullet = document.createElement("a-entity");
        console.log("shoot");

        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.1,
        });

        bullet.setAttribute("material", "color", "black");

        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        bullet.setAttribute("position", {
          x: pos.x,
          y: pos.y,
          z: pos.z,
        });

        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js Vector
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        //set the velocity and it's direction
        bullet.setAttribute("velocity", direction.multiplyScalar(-10));
        var scene = document.querySelector("#scene");
        bullet.setAttribute("dynamic-body", {
          shape: "sphere",
          mass: "0",
        });
        bullet.addEventListener("collide", this.removeBullet);
        console.log("shoot");
        scene.appendChild(bullet);
      }
    });
  },

  removeBullet: function (e) {
    console.log("removeBullet");
    console.log(e.detail.target.el);
    console.log(e.detail.body.el);
  },
});
