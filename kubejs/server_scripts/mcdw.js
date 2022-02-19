const mcdwWeapons = [
"axe",
"axe_anchor",
"axe_cursed",
"axe_double",
"axe_encrusted_anchor",
"axe_firebrand",
"axe_highland",
"axe_whirlwind",
"bow_ancient_bow",
"bow_bonebow",
"bow_bubble_bow",
"bow_bubble_burster",
"bow_burst_gale_bow",
"bow_call_of_the_void",
"bow_echo_of_the_valley",
"bow_elite_power_bow",
"bow_green_menace",
"bow_guardian_bow",
"bow_haunted_bow",
"bow_hunters_promise",
"bow_hunting_bow",
"bow_longbow",
"bow_lost_souls",
"bow_love_spell_bow",
"bow_masters_bow",
"bow_mechanical_shortbow",
"bow_nocturnal_bow",
"bow_phantom_bow",
"bow_pink_scoundrel",
"bow_power_bow",
"bow_purple_storm",
"bow_red_snake",
"bow_sabrewing",
"bow_shivering_bow",
"bow_shortbow",
"bow_snow_bow",
"bow_soul_bow",
"bow_trickbow",
"bow_twin_bow",
"bow_twisting_vine_bow",
"bow_void_bow",
"bow_web_bow",
"bow_weeping_vine_bow",
"bow_wind_bow",
"bow_winters_touch",
"crossbow_auto_crossbow",
"crossbow_azure_seeker",
"crossbow_baby_crossbow",
"crossbow_burst_crossbow",
"crossbow_butterfly_crossbow",
"crossbow_cog_crossbow",
"crossbow_corrupted_crossbow",
"crossbow_doom_crossbow",
"crossbow_dual_crossbow",
"crossbow_exploding_crossbow",
"crossbow_feral_soul_crossbow",
"crossbow_firebolt_thrower",
"crossbow_harp_crossbow",
"crossbow_harpoon_crossbow",
"crossbow_heavy_crossbow",
"crossbow_imploding_crossbow",
"crossbow_lightning_harp_crossbow",
"crossbow_nautical_crossbow",
"crossbow_pride_of_the_piglins",
"crossbow_rapid_crossbow",
"crossbow_scatter_crossbow",
"crossbow_shadow_crossbow",
"crossbow_slayer_crossbow",
"crossbow_soul_crossbow",
"crossbow_soul_hunter_crossbow",
"crossbow_spellbound_crossbow",
"crossbow_the_slicer",
"crossbow_veiled_crossbow",
"crossbow_voidcaller_crossbow",
"dagger_backstabber",
"dagger_chill_gale_knife",
"dagger_dagger",
"dagger_eternal_knife",
"dagger_fangs_of_frost",
"dagger_moon",
"dagger_resolute_tempest_knife",
"dagger_shear_dagger",
"dagger_soul_knife",
"dagger_swift_striker",
"dagger_tempest_knife",
"dagger_the_beginning",
"dagger_the_end",
"dagger_void_touched_blade",
"gauntlet_gauntlet",
"gauntlet_maulers",
"gauntlet_soul_fists",
"hammer_bone_cudgel",
"hammer_boneclub",
"hammer_flail",
"hammer_gravity",
"hammer_great",
"hammer_mace",
"hammer_stormlander",
"hammer_suns_grace",
"pick_diamond_pickaxe_var",
"pick_hailing_pinnacle",
"pick_howling_pick",
"pick_mountaineer_pick",
"shield_royal_guard",
"shield_vanguard",
"sickle_frost_scythe",
"sickle_jailors_scythe",
"sickle_last_laugh_gold",
"sickle_last_laugh_silver",
"sickle_nightmares_bite",
"sickle_sickle",
"sickle_skull_scythe",
"sickle_soul_scythe",
"spear_cackling_broom",
"spear_fortune",
"spear_glaive",
"spear_grave_bane",
"spear_spear",
"spear_venom_glaive",
"spear_whispering_spear",
"staff_battlestaff",
"staff_battlestaff_of_terror",
"staff_growing_staff",
"sword_beestinger",
"sword_beestinger",
"sword_broadsword",
"sword_broken_sawblade",
"sword_claymore",
"sword_coral_blade",
"sword_cutlass",
"sword_dancers_sword",
"sword_dark_katana",
"sword_diamond_sword_var",
"sword_freezing_foil",
"sword_frost_slayer",
"sword_great_axeblade",
"sword_hawkbrand",
"sword_heartstealer",
"sword_iron_sword_var",
"sword_katana",
"sword_masters_katana",
"sword_mechanized_sawblade",
"sword_nameless_blade",
"sword_obsidian_claymore",
"sword_rapier",
"sword_sinister",
"sword_sponge_striker",
"sword_the_starless_night",
"sword_truthseeker",
"whip_vine_whip",
"whip_whip"
];

onEvent('recipes', event => {
mcdwWeapons.forEach(function(item) {
  event.remove({output: "mcdw:" + item})
});

});