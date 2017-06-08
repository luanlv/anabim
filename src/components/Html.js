/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */


class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children, v, seo } = this.props;
    const url = 'http://edu.anabim.com'
    const defaultContent = "Anabim Education - Website đào tạo trực tuyến dành cho Xây dựng";
    const defaultLogo = '/logo_anabim.jpg'
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          {(seo && seo.description) ? (<meta name="description" content={seo.description} />): ( description ? <meta name="description" content={description} /> : '' ) }
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />

          <link rel="stylesheet" href="/assets/lib/semantic.min.css" />
          <link rel="stylesheet" href="/assets/app/app.css" />
          <link rel="stylesheet" href="/assets/custom.css" />

          <meta property='fb:app_id' content='1245241202224163' />
          <meta property='fb:admins' content='100004231235930' />
          {(seo && seo.og_title) ? (<meta property="og:title" content={seo.og_title} />) : (<meta property="og:title" content={defaultContent} />) }
          {(seo && seo.url) ? (<meta property="og:url" content={url + seo.url} />) : (<meta property="og:url" content={url} />) }
          {(seo && seo.og_image) ? (<meta property="og:image" content={url + seo.og_image} />) : (<meta property="og:image" content={url + defaultLogo} />)}
          {(seo && seo.og_description) ? (<meta property="og:description" content={seo.og_description} />) : (<meta property="og:description" content={defaultContent} />)}

          <link rel="stylesheet" type="text/css"  href={"/css/app.css?v=" +v }/>

          <script src="/assets/lib/head.min.js" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <script dangerouslySetInnerHTML={{ __html: this.props.scriptTop }} />

        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }} />


          <script
            dangerouslySetInnerHTML={{ __html:
            `head.load("/assets/lib/jquery.min.js")`
            + `.js("/assets/lib/semantic.min.js" )`
            + `.js("/assets/lib/jquery.menu-aim.js" )`
            + `.js("/assets/lib/modernizr.custom.js")`
            + `.js("/assets/lib/jquery.dlmenu.js")`

            +  `.js("${scripts[0]}?v=${v}")`
            +  `.js("${scripts[1]}?v=${v}")`}}
          >
          </script>

          <script dangerouslySetInnerHTML={{ __html: this.props.scriptBottom }} />


        </body>
      </html>
    );
  }
}

export default Html;
