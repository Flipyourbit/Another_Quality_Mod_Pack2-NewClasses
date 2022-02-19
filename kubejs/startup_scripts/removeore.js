onEvent('worldgen.remove', event => {
  event.removeOres(ores => {
    ores.blocks = [ 'techreborn:ruby_ore', 'techreborn:deepslate_ruby_ore', 'betternether:nether_redstone_ore'] // Removes coal and iron ore
  })
});