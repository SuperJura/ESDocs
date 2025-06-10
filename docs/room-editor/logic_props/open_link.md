---

---

# Open Link

Used to open a website link via the Steam Overlay. This Logic prop needs to be targeted directly by a button that the player presses ingame to prevent rooms from spamming players with links. There are only a few whitelisted websites you can link with this component and they are named below. If the link you pasted into the Link (Steam/Wiki) turns red once you click out of the field it means there is something wrong with it and the game will ignore the Open Link component and not open the link.
Intended purpose is for showing off your other created rooms, linking a guide to the current room or giving the players more information needed for a puzzle via a Wikipedia page.

![Open Link Selector](./img/Open_Link-Selector.png)


## Properties

### :small_orange_diamond:Link (Steam/Wiki)

<div className="highlight-div">
Add a url link to a Steam, Steam Community or Wikipedia page. The link turns red if it is invalid.
</div>

Changes the website that the link will go to.

:::tip  **Allowed Links**
  - steamcommunity.com/
  - store.steampowered.com/
  - en.wikipedia.org/ (or any other language on wiki)
:::


## Example
  - https://steamcommunity.com/app/1435790/workshop
  - https://en.wikipedia.org/wiki/Main_Page