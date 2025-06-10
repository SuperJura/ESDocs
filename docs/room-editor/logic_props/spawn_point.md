---

---

# Spawn Point

![Spawn Point Selector](./img/Spawn_Point-Selector.png)

A logic prop that determines the starting position and rotation of all players. Multiple Spawn Points can be added so that people playing in multiplayer do not spawn in the same position when starting the room. 

You can also separate players into 2 or more groups by placing 2 or more Spawn Points. Groups of players playing in multiplayer will spawn evenly across all available Spawn Points.


### :small_orange_diamond:Player Speed
<div className="highlight-div">
Player Speed when the player is moved to this point. To reset it, teleport the player to another point.
This represents Walking speed. Running speed is 1.5x faster than Walking speed.
Default speed is 1
</div>

:::tip
To make player stand in place without being able to move, put Player Speed to 0
:::tip

:::note
If no spawn points exist in the room the players will spawn on position 0, 0, 0.
:::

### :small_orange_diamond:Player speed
<div className="highlight-div">
Player Speed when the player is moved to this point. To reset it, teleport the player to another point. This represents Walking speed. Running speed is 1.5x faster than Walking speed.
</div>

You can use Player Speed to lock him in place by setting 0 and make him really fast by putting a big value.