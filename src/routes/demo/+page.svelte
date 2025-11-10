<script lang="ts">
  import Tab, { Label } from '@smui/tab'
  import TabBar from '@smui/tab-bar'
  import { countries } from './contries'
  import Paper, { Content } from '@smui/paper'
  import './style.css'
  import { countryCitiesDB } from './mock'
  import { getCountryCities } from './data'
  import { setContext } from 'svelte'

  let allCountriesCities = countryCitiesDB

  let activeCountry = $state('Brazil')
  setContext('demoActiveCountry', () => activeCountry)

  let countryCitiesMap: Record<string, Set<string>> = $state({
    Brazil: new Set([...Array.from(countryCitiesDB.Brazil).slice(0, 3)]),
    Canada: new Set([...Array.from(countryCitiesDB.Canada).slice(0, 3)]),
    Denmark: new Set([...Array.from(countryCitiesDB.Denmark).slice(0, 3)]),
    Egypt: new Set([...Array.from(countryCitiesDB.Egypt).slice(0, 3)]),
    France: new Set([...Array.from(countryCitiesDB.France).slice(0, 3)]),
    Germany: new Set([...Array.from(countryCitiesDB.Germany).slice(0, 3)]),
  })

  async function fetchCities(country: string) {
    const cities = await getCountryCities(country)
    const sortedCities = cities.sort(() => Math.random() - 0.5)
    const citiesSet = new Set(sortedCities)

    allCountriesCities = {
      ...allCountriesCities,
      [activeCountry]: new Set([...citiesSet]),
    }
  }

  $effect(() => {
    fetchCities(activeCountry)
  })

  function addCity(activeCountry: string) {
    if (!activeCountry) return

    const citiesList = allCountriesCities[activeCountry]
    const currentCities = countryCitiesMap[activeCountry]

    if (currentCities.size < citiesList.size) {
      const updated = [
        ...currentCities,
        ...Array.from(citiesList).slice(
          currentCities.size,
          currentCities.size + 3,
        ),
      ]

      countryCitiesMap = {
        ...countryCitiesMap,
        [activeCountry]: new Set([
          ...countryCitiesMap[activeCountry],
          ...updated,
        ]),
      }
    }
  }
</script>

<svelte:head>
  <title>Demo</title>
  <meta name="description" content="A Wordle clone written in SvelteKit" />
</svelte:head>

<h1>See countries cities</h1>

<div class="demo-container">
  <div class="tab-bar-container">
    <TabBar tabs={countries} bind:active={activeCountry}>
      {#snippet tab(tab)}
        <Tab {tab}>
          <Label>{tab}</Label>
        </Tab>
      {/snippet}
    </TabBar>
  </div>

  <div class="demo-content">
    <Paper role="tabpanel" variant="unelevated">
      <Content>
        <div class="cities-list">
          <ul>
            {#each countryCitiesMap[activeCountry] as city}
              <li>{city}</li>
            {/each}
          </ul>
        </div>
      </Content>
    </Paper>

    <button onclick={() => addCity(activeCountry)}> Add City </button>
  </div>
</div>
