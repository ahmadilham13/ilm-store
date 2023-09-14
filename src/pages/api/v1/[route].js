import { api } from "@/utils/api";
import { withIronSessionApiRoute } from "iron-session/next";
import { getIronSession } from "iron-session/edge";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export default withIronSessionApiRoute( async function handler(req, res) {
    const query = req.query
    
    const {route, perpage, slug, page, category} = query


    switch (req.method) {
        case 'GET':
            try {
                
                // set params
                const params = {}
                if(slug) {
                    params['slug'] = slug
                }
                if(perpage) {
                    params['perpage'] = perpage
                }
                if(page) {
                    params['page'] = page
                }
                if(category) {
                    params['category'] = category
                }

                const session = await getIronSession(req, NextResponse.next(), {
                    cookieName: process.env.NEXT_PUBLIC_COOKIE_KEY,
                    password: process.env.NEXT_PUBLIC_COOKIE_PASSWORD,
                    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
                    cookieOptions: {
                        secure: process.env.NODE_ENV === "production",
                    },
                })

                const { user } = session
                
                var bearer = user?.token;

                if(!bearer) {
                    const data = {
                        username: process.env.NEXT_PUBLIC_USERNAME,
                        password: process.env.NEXT_PUBLIC_PASSWORD
                    }
                    
                    const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}api/${process.env.NEXT_PUBLIC_API_VERSION}/getAccessToken`, data)

                    req.session.user = {
                        token: response.data.data.access_token
                    }
                    await req.session.save()

                    bearer = response.data.data.access_token
                }
  
                const response = await api.get(`api/${route}`, {
                    headers: {
                        Authorization: `Bearer ${bearer}`
                    },
                    params: params
                })

                res.status(200).json({ message: 'SUCCESS', data: JSON.parse(JSON.stringify(response.data)) })
            } catch (err) {
                res.status(400).json({ message: err })
            }
            break;
        case 'POST':
            try {
                const response = await api.post(`auth/${route}`, req.body)
                
                res.status(200).json({ message: 'SUCCESS', data: JSON.parse(JSON.stringify(response.data)) })
            } catch (err) {
                res.status(400).json({ message: err })
            }
            break;
    }
  },
  {
    cookieName: process.env.NEXT_PUBLIC_COOKIE_KEY,
    password: process.env.NEXT_PUBLIC_COOKIE_PASSWORD,
    ttl: process.env.NEXT_PUBLIC_COOKIE_EXPIRED,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
}
)