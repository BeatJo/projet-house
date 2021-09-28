import { Switch, Route } from "react-router-dom";
import { HomeScreen, LoginScreen, NewProjectScreen, ProjectsScreen } from "../screens";
import { SectionPage, TownProjects } from "../screens/ProjectsScreen/components";
import TableauBord from "../TableauDeBordProjet";
import InfoProjet from "../TableauDeBordProjet/VotreProjet/votreprojet";

const AppNavigator = () => {
  return ( 
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/Login" component={LoginScreen} />
      <Route exact path="/Projects" component={ProjectsScreen} />
      <Route exact path="/Projects/:sectionId/:name" component={SectionPage} />
      <Route exact path="/Projects/:sectionId/:name/:townId" component={TownProjects} />
      <Route exact path="/create-project" component={NewProjectScreen} />
      <Route exact path="/TableauDeBord" component={TableauBord} />
      <Route exact path="/informations" component={InfoProjet} />
    </Switch>
   );
}
 
export default AppNavigator;