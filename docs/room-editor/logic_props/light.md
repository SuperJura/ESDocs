---

---

# Light
A colorful light to be used in your rooms. You can use it to create a mood for the entire room or different moods throughout the room. It can be switched between Spot-lights, Directional-lights and Point-lights. 

![Light Selector](./img/Light-Selector.png)

Every new level starts with one `Directional` `Light` prop, just so that you can have some light. You are free to delete or change this `Light` in any way you wish.

:::note
The lights used in the rooms are not quaranteed to look the same for all players. This depends on the type of computer and the graphical settings they set in their game. So it is not recommended to create puzzles that are based on the `Light` props. If you do you should probably write a note to the player at the begining of the room that your room requires lights and may not work on some computers.
:::

:::tip
To create complete darkness in your room you can turn off all the `Light` props and use the `Fog` and `Post Processing` props to further darken the room. But beware, some players with slower computers will not see the same thing you are seeing in your room.
:::

## Properties

### :small_orange_diamond:Type
<div className="highlight-div">
Spot - emits light in a cone shape.<br>
Directional - a light that's located infinitely far away and emits light in one direction.<br>
Point - located at a point and emits light in all directions equally.
</div>

A [spotlight](https://en.wikipedia.org/wiki/Spotlight_(theatre_lighting)) creates a beam of light that points in a direction you choose. Rotating it will rotate the light cone direction. You can also change it's position.

![Light - Spot](./img/light/light_spot.gif)

A directional light creates light on all surfaces in the entire escape room on the same surface. Rotating it will change the direction of the light for the entire room. Changing the position of the `Directional` `Light` prop will not affect the light direction, so you can move the prop wherever you want, only the rotation matters.

![Light - Spot](./img/light/light_directional.gif)

A point light creates light glowing from the point of the light. Rotating it will not change anything, as it emits light the same on all rotations, but you can change it's position.

![Light - Spot](./img/light/light_point.gif)

### :small_orange_diamond:Range
<div className="highlight-div">
Determines the distance the light travels before stopping.
</div>

How far you want your light to reach before it fades out.

:::note
Only active for `Spot` and `Point` lights.
:::

### :small_orange_diamond:Spot Angle
<div className="highlight-div">
Determines the angle of the spotlight cone in degrees.
</div>

Here you can set how wide you want the cone to be. The default is 30.

:::note
Only active for `Spot` lights.
:::

### :small_orange_diamond:Color
<div className="highlight-div">
The color that the selected 'Light' prop emits.
</div>

What color you want your light to glow.

### :small_orange_diamond:Intensity
<div className="highlight-div">
Determines the light's brightness multiplied with the light color.
</div>

How strong the brightness of the light will glow at its strongest point.

### :small_orange_diamond:Behaviour
<div className="highlight-div">
Animation - used to move the prop from the current position to a waypoint.
</div>

Here you can only add an `Animation` behaviour to the light itself. Useful to create some s-_light_ movement in the room, like the light bouncing from the fire from a fireplace or a candle, or a light party!

![Light - Spot](./img/light/light_party.gif)
