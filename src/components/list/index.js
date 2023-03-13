import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import NotesIcon from "@mui/icons-material/Notes";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          sx={{ opacity: 0.3 }}
        >
          <ListItemIcon>
            <PlayLessonIcon color="primary" />
          </ListItemIcon>

          <ListItemText>
            <React.Fragment>
              {"Introduction of the Array  "}
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
            </React.Fragment>
          </ListItemText>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>{" "}
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>{" "}
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>{" "}
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>{" "}
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <NotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              m: 0,
            }}
            primary="World of the computers!
          "
          />
          <ListItemText sx={{ flexDirection: "row" }}>
            <Typography
              color={"text.secondary"}
              component={"span"}
              variant={"body2"}
            >
              10m
            </Typography>
          </ListItemText>
        </ListItemButton>
      </List>
    </Box>
  );
}
