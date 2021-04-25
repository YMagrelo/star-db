import withData from '../hoc-helpers/with-data';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';

const swapiService = new SwapiService();
const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList,
}