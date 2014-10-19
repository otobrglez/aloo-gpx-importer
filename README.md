# GPX to distances

This repo contains node/ruby script to extract distance from GPX data and build json KPI file that can be passed to Aloo.

- [Oto Brglez](https://twitter.com/otobrglez)

## Usage

Save your GPX files to activities folder and run build_list rake task.

    npm install
    rake build_list

## Sending to Aloo

    curl -XPOST -H'Content-Type: application/json' -BOARD_ID:SECRET \
    -d@temp.json http://aloo.r14.railsrumble.com/api/kpis
