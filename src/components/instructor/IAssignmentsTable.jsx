import { Avatar, AvatarGroup, Button, Table, Typography } from "@mui/joy";
import React from "react";
import { FileText } from "react-feather";
import { useGetAssignmentsQuery } from "../../redux/services/courses/assignments";
import { Link, useParams } from "react-router-dom";

export default function IAssignmentsTable() {
  let { id } = useParams();

  let { data, error, isLoading } = useGetAssignmentsQuery({ id });
  let assignments = data?.assignments;
  return (
    <Table
      sx={{
        "--TableCell-paddingX": "1rem",
        "--TableCell-paddingY": "1rem",
        border: "1px solid #e6e6e6",
      }}
    >
      <thead>
        <tr>
          <th>Assignment Title</th>
          <th>New Submissions</th>
          <th>Accepted</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {assignments?.map((a, i) => {
          return (
            <tr key={i}>
              <td>
                <Typography
                  level="body-sm"
                  startDecorator={<FileText />}
                  sx={{ alignItems: "flex-start" }}
                >
                  {a.title}
                </Typography>
              </td>

              <td>
                <AvatarGroup
                  size="sm"
                  sx={{ "--AvatarGroup-gap": "-8px", "--Avatar-size": "24px" }}
                >
                  <Avatar
                    src="https://i.pravatar.cc/24?img=6"
                    srcSet="https://i.pravatar.cc/48?img=6 2x"
                  />
                  <Avatar
                    src="https://i.pravatar.cc/24?img=7"
                    srcSet="https://i.pravatar.cc/48?img=7 2x"
                  />
                  <Avatar
                    src="https://i.pravatar.cc/24?img=8"
                    srcSet="https://i.pravatar.cc/48?img=8 2x"
                  />
                  <Avatar
                    src="https://i.pravatar.cc/24?img=9"
                    srcSet="https://i.pravatar.cc/48?img=9 2x"
                  />
                </AvatarGroup>
              </td>
              <td>
                <AvatarGroup
                  size="sm"
                  sx={{ "--AvatarGroup-gap": "-8px", "--Avatar-size": "24px" }}
                >
                  <Avatar
                    src="https://i.pravatar.cc/24?img=6"
                    srcSet="https://i.pravatar.cc/48?img=6 2x"
                  />
                  <Avatar
                    src="https://i.pravatar.cc/24?img=7"
                    srcSet="https://i.pravatar.cc/48?img=7 2x"
                  />
                  <Avatar
                    src="https://i.pravatar.cc/24?img=8"
                    srcSet="https://i.pravatar.cc/48?img=8 2x"
                  />
                  <Avatar
                    src="https://i.pravatar.cc/24?img=9"
                    srcSet="https://i.pravatar.cc/48?img=9 2x"
                  />
                </AvatarGroup>
              </td>
              <td>
                <Link
                  to={a._id}
                  style={{ font: "inherit", textDecoration: "none" }}
                >
                  <Button variant="outlined">Open</Button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
