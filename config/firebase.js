var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "capstone-86dfc",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCFo+OQmAhWCrG2\nM0NE3LyNh4gzVP9dRaZiYdN4Tee6rJNetT2pyWgSnErRS0j2U2Cp8hRJmI6uwCaL\nSGitxweHAPuJ2h0k1XoLQBLdpdfDzUHUeeaV18jVEaDvlINYg2mN9lLMkUjTJSQ5\nAjS4g18A6DzyUx8CNDHiQBkRpCXrzIQwSzshsndzSa9WvR50zPbm1W0HGavKJkpY\nJYIvv8oA/D4XU224ui9qij9OEnCUiOzVR9dwBPCmVU2RMlBy4wZqXC7lMoN5+pJf\nAcp7wCtj2ool8tu9XFTUie2TyfyqLW6CkrYP7iNMgrFmSmW2nNYcQBFF+7LjHwwF\n/20D3O/FAgMBAAECggEADAgdpIFQ5tDe/7oNHrWyMsUhVGByU+cXEW518okuXsEg\nzNBhH9h7395lt1ghgS6FL70VadbWqbxaUVnl4Bdg1x0V3cBfCqzpkvpkIxkbnDZD\nl1SY7PlYzHi3gOUMZOYClSm4efsZOmFH/0CdQdYaBzk2xikI9qgqVuX8cSPSgjBt\n5pUuqnDaMjar6cvHKpHW2tjdqmxD/ncMpbSki8qYb3aXfabyHkFNuaiQQyVVfxBr\n4yaZGO6rzno/eQ2rYIqRZRE89W7aOILu3zc4mCn4ddB79jLh1t+wLRzRjejBrT5W\njH94m1MYuyn4jGwih0+NMW6oR++4xR6MaWglr1rX9QKBgQC6IvG2XzuDktPKpDfk\ngDFoKIQ/UfDOOX/yEM7ZBOzk4mc/0fqFWgKYo7EyqRzOsMuIuvjLqsXeH4TD/aP0\nX/70DsndxWkgYYTpkdshf3AWjY9Z4T1nMxItZxNH9vXJ9f6Jb/1rqav5w1o/upPy\n+u1Trla0bVtu9jPKOdLKLWYtYwKBgQC3zMzU2shR2dte9Qg+UpHr8EwJXYyNNXZL\nsUclaO8WQqZzkLidoj0QWY6V65F7HOnZybPwlkSUVdA8YI4nKTV4He8bXfRbCeOk\n60IAnISU+9rpZtFsieBUfJ7PJWnQ0mi5iIJazwmRd1a1G0oy5BcYwLroQMUkk+c2\nom0IjzLqtwKBgEIS5Xq3k4jBNi1Y3f5fAyrWNxvDGpgaETD8hnDDLtSRCdW91BBC\nQ2mrsdsp7O/yEk4XEPo7RMH0rkxkXS8CZJ5+IWp4CTlVZLkE7aSWeFOJLLnbGtDn\ncCxtyophQB7RE+n1tx/guwuOLRsyQBKgwF5UJLMnnq1k+D1xCUJ7mynBAoGBALcN\n0sb/qtjSSAiXtAEWDVzVs3T0ZcJRh6K1Se15R/18nfilHyln5rc86qRnvDnIPyN4\nHq0zi9PMb5tictGP2j/qWDSCa5asD7w1zkN7nxQejhU9IMCfxPuALk6SrYObu09l\nJKa6YoYtO/8d0dVDk7lEYiJkN7RJVdL1C/ClZgmbAoGADsO0cjTnhBNgNR0AYkpw\nmuH+TF0jbYRVS2LSIuhMOz1WbUEceG/8Jf4TGpYhSoIZGlJ5KW+oR3Ewe7ki4kAO\nzb63YhYxL7mIC0bQfMtBfcKQqggYeUqWv2tn0djruXNUWBdtInX5+TruB2uG+oSf\ncsiqg9wsahA482IEz/bb8Ok=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-70lau@capstone-86dfc.iam.gserviceaccount.com",
  }),
})

module.exports = admin