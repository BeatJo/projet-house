import { Switch, Route } from "react-router-dom";
import { HomeScreen, LoginScreen, NewProjectScreen, ProjectsScreen, DashboardInvestScreen,DashboardProjectScreen, EventScreen, EventPageScreen, AboutUsScreen, InvestEnterpriseScreen, FinanceEnterpriseScreen } from "../screens";
import { InvestScreen } from "../screens/DashboardInvesttScreen/components";
import { MessagesScreen } from "../screens/DashboardProjectScreen/components";
import ProjectScreen from "../screens/DashboardProjectScreen/components/ProjectScreen";
import { SectionPage, TownProjects } from "../screens/ProjectsScreen/components";

const AppNavigator = () => {
  return ( 
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/Login" component={LoginScreen} />
      <Route exact path="/Projects" component={ProjectsScreen} />
      <Route exact path="/Projects/:sectionId/:name" component={SectionPage} />
      <Route exact path="/Projects/:sectionId/:name/:townId" component={TownProjects} />
      <Route exact path="/create-project" component={NewProjectScreen} />
      <Route exact path="/Dashboard/Projects" component={DashboardProjectScreen} />
      <Route exact path="/Dashboard/Invest" component={DashboardInvestScreen} />
      <Route exact path="/Dashboard/Projects/:id/:name" component={ProjectScreen} />
      <Route exact path="/Dashboard/Invest/:id/:name" component={InvestScreen} />
      <Route exact path="/Dashboard/Projects/Messages" component={MessagesScreen} />
      <Route exact path="/Events" component={EventScreen} />
      <Route exact path="/Events/:id/:name" component={EventPageScreen} />
      <Route exact path="/AboutUs" component={AboutUsScreen} />
      <Route exact path="/invest-enterprise" component={InvestEnterpriseScreen} />
      <Route exact path="/comment-financer-projet" component={FinanceEnterpriseScreen} />
    </Switch>
   );
}
 
export default AppNavigator;