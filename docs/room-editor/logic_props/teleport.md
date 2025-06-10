---

---

# Teleport

![Teleport Selector](./img/Teleport-Selector.png)

A logic prop that can change the player position. When this logic prop is triggered the player(s) will be teleported to the position of the prop.

### :small_orange_diamond:Teleport All Players
<div className="highlight-div">
When checked, all players will be teleported to this teleport position. When not checked, only one player is teleported.
</div>

Use this if you want to teleport all players when this Teleport logic prop is triggered.



### :small_orange_diamond:Change Rotation On Teleport
<div className="highlight-div">
When checked, teleported players will face the direction this teleport is pointing at. When not checked, the players keep their previous rotations.
</div>

You can use this to force a player to look in a certain direction.

### :small_orange_diamond:Player speed
<div className="highlight-div">
Player Speed when the player is moved to this point. To reset it, teleport the player to another point. This represents Walking speed. Running speed is 1.5x faster than Walking speed.
</div>

You can use Player Speed to lock him in place by setting 0 and make him really fast by putting a big value.

:::tip
To make teleportation more smooth, the teleporter can be set a bit deeper into the ground.
:::tip