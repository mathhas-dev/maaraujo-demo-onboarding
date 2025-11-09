<script lang="ts">
  import { countries } from './contries'

  let selectedCountry = ''
  let cities = []

  const countryCitiesMap: Record<string, string[]> = {
    Brazil: ['São Paulo', 'Rio de Janeiro', 'Brasília'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
    Denmark: ['Copenhagen', 'Aarhus', 'Odense'],
    Egypt: ['Cairo', 'Alexandria', 'Giza'],
    France: ['Paris', 'Lyon', 'Marseille'],
    Germany: ['Berlin', 'Munich', 'Frankfurt'],
  }
</script>

<svelte:head>
  <title>Demo</title>
  <meta name="description" content="A Wordle clone written in SvelteKit" />
</svelte:head>

<h1>See countries cities</h1>

<ul>
  {#each countries as country}
    <li>{country}</li>
    <ul>
      {#each countryCitiesMap[country] as city}
        <li>{city}</li>
      {/each}
    </ul>
  {/each}
</ul>
