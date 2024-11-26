/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const gameSidebar = [
  { type: 'doc', id: 'intro/intro', },
  { type: 'doc', id: 'patch-history', },
  { type: 'doc', id: 'game-faq/game-faq', },
  {
    type: 'category', label: 'Stream VODs', items:
      [
        'stream-vods/build-a-room-6-winners',
        'stream-vods/build-a-room-5-winners',
        'stream-vods/build-a-room-4-winners',
        'stream-vods/versus-update-q-a',
        'stream-vods/build-a-room-3',
        'stream-vods/build-a-thon-22',
        'stream-vods/room-editor-two',
        'stream-vods/build-a-room-2-winners',
        'stream-vods/build-a-room-2-rooms',
        'stream-vods/build-a-room-1-winners'
      ],
    link: {
      type: 'generated-index',
      description: "Find old Pine streams here."
    },
  },

  { type: 'doc', id: 'stats/stats', },
  { type: 'doc', id: 'press', },
  { type: 'doc', id: 'credits', },
  { type: 'doc', id: 'contributing/contributing', },
]
const roomEditorSidebar = [
  { type: 'doc', id: 'room-editor/room-editor', },
  { type: 'doc', id: 'room-editor/room-editor-handbook', },
  { type: 'doc', id: 'room-editor/room-editor-faq/room-editor-faq', },
  { type: 'doc', id: 'room-editor/custom-models', },
  {
    type: 'category', label: 'Logic Props', items:
      [
        'room-editor/logic_props/collider',
        'room-editor/logic_props/display',
        'room-editor/logic_props/empty',
        'room-editor/logic_props/finish',
        'room-editor/logic_props/fog',
        'room-editor/logic_props/light',
        'room-editor/logic_props/lock',
        'room-editor/lua-scripting',
        'room-editor/logic_props/mirror',
        'room-editor/logic_props/obstacle',
        'room-editor/logic_props/open_link',
        'room-editor/logic_props/skybox',
        'room-editor/logic_props/post_processing',
        'room-editor/logic_props/puzzle',
        'room-editor/logic_props/roulette',
        'room-editor/logic_props/slot',
        'room-editor/logic_props/sound',
        'room-editor/logic_props/spawn_point',
        'room-editor/logic_props/teleport',
        'room-editor/logic_props/trigger',
        'room-editor/logic_props/visibility_activator',
        'room-editor/logic_props/water',
      ],
    link: {
      type: 'doc',
      id: 'room-editor/logic_props/logic_props'
    },
  },
  {
    type: 'category', label: 'Behaviours', items:
      [
        'room-editor/behaviours/animation',
        'room-editor/behaviours/button',
        'room-editor/behaviours/turnable',
        'room-editor/behaviours/dial',
        'room-editor/behaviours/zoomable',
        'room-editor/behaviours/drag_target',
        'room-editor/behaviours/slidable',
      ],
    link: {
      type: 'doc',
      id: 'room-editor/behaviours/behaviours'
    },
  },
  {
    type: 'category', label: 'Room Editor - Videos', items:
      [
        'tutorial-videos/puzzle-prop',
        'tutorial-videos/roulette-prop',
        'tutorial-videos/room-editor-halloween-update',
        'tutorial-videos/room-editor-basics',
      ],
    link: {
      type: 'generated-index',
      description: "Room Editor information in video format!"
    },
  },
  {
    type: 'category', label: 'Community', items:
      [
        'room-editor/examples/simon-says/simon-says',
        'room-editor/custom-assets'
      ],
    link: {
      type: 'generated-index',
      description: "Explore a growing collection of examples from our community."
    },
  }
]

module.exports = {gameSidebar, roomEditorSidebar}
