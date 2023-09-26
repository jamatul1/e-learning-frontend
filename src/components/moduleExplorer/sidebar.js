import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator, {
  listItemDecoratorClasses,
} from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import * as Feather from "react-feather";
function getIcon(type) {
  if (type === "video") return <Feather.Youtube size={20} />;
  if (type === "pdf") return <Feather.FileText size={20} />;
  if (type === "assignment") return <Feather.Link2 size={20} />;
  if (type === "quiz") return <Feather.BatteryCharging size={20} />;
}
export default function ModuleSidebar({ selected, setSelected, items }) {
  return (
    <Box sx={{ py: 2, pr: 2 }}>
      <List
        aria-label="Sidebar"
        sx={{
          gap: 1,
          "--ListItem-paddingLeft": "0px",
          "--ListItemDecorator-size": "64px",
          "--ListItem-minHeight": "32px",
          "--List-nestedInsetStart": "13px",
          [`& .${listItemDecoratorClasses.root}`]: {
            justifyContent: "flex-end",
            pr: "18px",
          },
          '& [role="button"]': {
            borderRadius: "0",
          },
        }}
      >
        {items.map((item, i) => {
          return (
            <ListItem key={i}>
              <ListItemButton
                selected={selected === i}
                color={selected === i ? "primary" : undefined}
                onClick={() => setSelected(i)}
                sx={{ px: 3 }}
              >
                <ListItemDecorator>{getIcon(item.type)}</ListItemDecorator>
                <ListItemContent>
                  {i + 1 + "."} {modifiedTitle(item.title)}
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

function modifiedTitle(title) {
  console.log(title.length);
  let modified = title.length > 16 ? title.slice(0, 17) + "..." : title;
  return modified;
}
