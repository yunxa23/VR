var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "波上宮",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.10551188824516444,
        "pitch": -0.19849146009316954,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.5276348470933012,
          "pitch": 0.09813637933958397,
          "rotation": 0.7853981633974483,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0158554461517717,
          "pitch": -0.03296503123140759,
          "title": "波上宮",
          "text": "為琉球八社之首的波上宮，在琉球王國時期被尊稱為「當國第一神社」，也是八社中唯一靠海的神社，與那霸港往來的船隻相對望，許多漁民都會在此祈求一帆風順、滿載而歸。"
        }
      ]
    },
    {
      "id": "1-",
      "name": "海灘",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.15236632828098706,
        "pitch": -0.04325243713353544,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.6808441004979358,
          "pitch": -0.004577779195965803,
          "rotation": 5.497787143782138,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "坡上宮",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
