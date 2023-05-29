import {
    Avatar,
    Card, CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { User }from "../../client";
import {useEffect, useState} from "react";
import userApi from "../../api/userApi";

interface CompanyCardProps {
    companyId: number | null
}

const CompanyCard = ({companyId}: CompanyCardProps) => {
    const [company, setCompany] = useState<User | null>(null);

    useEffect(() => {
        const fetchCollaboration = async () => {
            try {
                if (companyId) {
                    const user = await userApi.getUserById(companyId); // Parse id as a number
                    setCompany(user);
                }
            } catch (error) {
                console.error('Error fetching collaboration:', error);
            }
        };

        fetchCollaboration();
    }, [companyId]);
  return (
      <Card sx={{ maxWidth: 345 }}>
          <CardHeader
              action={
                  <IconButton aria-label="settings">
                      <MoreVertIcon />
                  </IconButton>
              }
              title={company?.organization_name ? company.organization_name : "Organization Name"}
          />
          <CardMedia
              component="img"
              height="194"
              image={company?.avatar_url ? company.avatar_url : "https://mui.com/static/images/cards/paella.jpg"}
              alt={company?.organization_name}
          />
          <CardContent>
              <Typography variant="body2" color="text.secondary">
                    {company?.organization_description ? company.organization_description : "Description"}
              </Typography>
          </CardContent>
          <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                  <ShareIcon />
              </IconButton>
          </CardActions>
      </Card>
  );
};

export default CompanyCard;
