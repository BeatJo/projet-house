import { Switch, Route } from "react-router-dom";
import { HomeScreen, LoginScreen, ProjectsScreen } from "../screens";
import { SectionPage, TownProjects } from "../screens/ProjectsScreen/components";

const AppNavigator = () => {
  return ( 
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/Login" component={LoginScreen} />
      <Route exact path="/Projects" component={ProjectsScreen} />
      <Route exact path="/Projects/:sectionId/:name" component={SectionPage} />
      <Route exact path="/Projects/:sectionId/:name/:townId" component={TownProjects} />
    </Switch>
   );
}
 
export default AppNavigator;