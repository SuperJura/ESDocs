import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

export const DocumentationTable = () => (
  <table className="statsTable">
    <thead>
      <tr>
        <th className="statsTableLeft">Page</th>
        <th>Percent done</th>
      </tr>
    </thead>
    <tbody>
      <Row href="./room-editor/behaviours/animation"            title="Behaviours - Animation"            percent="100" />
      <Row href="./room-editor/behaviours/button"               title="Behaviours - Button"               percent="100" />
      <Row href="./room-editor/behaviours/dial"                 title="Behaviours - Dial"                 percent="90" />
      <Row href="./room-editor/behaviours/drag_target"          title="Behaviours - Drag Target"          percent="1" />
      <Row href="./room-editor/behaviours/slidable"             title="Behaviours - Slidable"             percent="100" />
      <Row href="./room-editor/behaviours/turnable"             title="Behaviours - Turnable"             percent="100" />
      <Row href="./room-editor/behaviours/zoomable"             title="Behaviours - Zoomable"             percent="100" />
      <Row href="./room-editor/logic_props/collider"            title="Logic Props - Collider"            percent="100" />
      <Row href="./room-editor/logic_props/display"             title="Logic Props - Display"             percent="100" />
      <Row href="./room-editor/logic_props/empty"               title="Logic Props - Empty"               percent="100" />
      <Row href="./room-editor/logic_props/finish"              title="Logic Props - Finish"              percent="100" />
      <Row href="./room-editor/logic_props/fog"                 title="Logic Props - Fog"                 percent="100" />
      <Row href="./room-editor/logic_props/light"               title="Logic Props - Light"               percent="100" />
      <Row href="./room-editor/logic_props/lock"                title="Logic Props - Lock"                percent="100" />
      <Row href="./room-editor/logic_props/mirror"              title="Logic Props - Mirror"              percent="100" />
      <Row href="./room-editor/logic_props/obstacle"           title="Logic Props - Obstacle"            percent="100" />
      <Row href="./room-editor/logic_props/open_link"           title="Logic Props - Open Link"           percent="100" />
      <Row href="./room-editor/logic_props/post_processing"     title="Logic Props - Post Processing"     percent="100" />
      <Row href="./room-editor/logic_props/puzzle"              title="Logic Props - Puzzle"              percent="100" />
      <Row href="./room-editor/logic_props/roulette"            title="Logic Props - Roulette"            percent="100" />
      <Row href="./room-editor/logic_props/skybox"              title="Logic Props - Sky Box"             percent="100" />
      <Row href="./room-editor/logic_props/slot"                title="Logic Props - Slot"                percent="100" />
      <Row href="./room-editor/logic_props/sound"               title="Logic Props - Sound"               percent="100" />
      <Row href="./room-editor/logic_props/spawn_point"         title="Logic Props - Spawn Point"         percent="100" />
      <Row href="./room-editor/logic_props/teleport"            title="Logic Props - Teleport"            percent="100" />
      <Row href="./room-editor/logic_props/visibility_activator"title="Logic Props - Visibility Activator"percent="100" />
      <Row href="./room-editor/logic_props/water"               title="Logic Props - Water"               percent="100" />
    </tbody>
  </table>
);

const Row = ({ href, title, percent }) =>
(
  <tr>
    <td align="center" valign="middle" width="150" height="70">
      <a href={href}>
        <b>{title}</b>
      </a>
    </td>
    <td>
      <ProgressBar completed={parseInt(percent)} />
    </td>
  </tr>
);
