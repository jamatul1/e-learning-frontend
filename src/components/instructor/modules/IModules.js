import { NavLink, useLocation, useParams } from "react-router-dom";
import { useGetModulesQuery } from "../../../redux/services/courses/modules";
import {
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
} from "@mui/joy";
import ListItemDecorator, {
  listItemDecoratorClasses,
} from "@mui/joy/ListItemDecorator";
import { Folder } from "react-feather";
import { BatteryCharging, Link2, Video } from "react-feather";
import { baseUrl } from "../../../utils/baseUrl";

export default function IModules() {
  let { id } = useParams();
  let { pathname } = useLocation();
  let { data, error, isLoading } = useGetModulesQuery({ id });
  let modules = data?.modules;
  return (
    <Box sx={{ py: 2, pr: 2, maxWidth: 520, minWidth: 480 }}>
      <Typography textAlign="center" level="h3">
        Modules
      </Typography>
      <List
        aria-label="Sidebar"
        sx={{
          "--ListItem-paddingLeft": "0px",
          "--ListItemDecorator-size": "64px",
          "--ListItem-minHeight": "32px",
          "--List-nestedInsetStart": "13px",
          [`& .${listItemDecoratorClasses.root}`]: {
            justifyContent: "flex-end",
            pr: "18px",
          },
          '& [role="button"]': {
            borderRadius: "0 20px 20px 0",
          },
        }}
      >
        {(!modules || modules?.length === 0) && (
          <Typography textAlign={"center"}>Modules list is empty</Typography>
        )}
        {modules &&
          modules.map((m, i) => {
            return (
              <ListItem key={i}>
                <ListItemButton
                  sx={{ textDecoration: "none" }}
                  component={NavLink}
                  to={m._id}
                  selected={pathname === `${pathname}/${m._id}`}
                >
                  <ListItemDecorator>
                    <Folder />
                  </ListItemDecorator>
                  <ListItemContent>{m.title}</ListItemContent>
                  <Box sx={{ display: "flex", gap: 3 }}>
                    <Badge
                      variant="plained"
                      size="sm"
                      sx={{ borderRadius: "none" }}
                      badgeContent={String(m.lessons.length)}
                    >
                      <Typography>
                        <Video size={16} />
                      </Typography>
                    </Badge>
                    <Badge
                      variant="plained"
                      size="sm"
                      badgeContent={String(m.assignments.length)}
                    >
                      <Typography>
                        <Link2 size={16} />
                      </Typography>
                    </Badge>
                    <Badge
                      variant="plained"
                      size="sm"
                      badgeContent={String(m.quizzes.length)}
                    >
                      <Typography>
                        <BatteryCharging size={16} />
                      </Typography>
                    </Badge>
                  </Box>
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
}
