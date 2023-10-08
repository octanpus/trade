import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone'
import InputAutoSuggest from 'react-input-autosuggest'
//import 'react-input-autosuggest/dist/index.css'
import { NavbarBrand, Navbar, Progress, Container, Col, Row, Nav, NavItem, NavLink, TabContent, TabPane, Button, Input,FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Table } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import classnames from 'classnames';
import Select from 'react-select';
//import makeAnimated from 'react-select/animated';
import latest_thumbnail from './latest_thumbnail.png'

/*
var commodities = {9850:["Spirits",0.2],
                   43:["Antibiotics",0.5],
                   3717:["Dairy Products",0.5],
                   3715:["Frozen Food",0.5],
                   45:["Frozen Plant Seeds",0.5],
                   3647:["Holoreels",0.5],
                   12478:["Khumaak",0.3],
                   3777:["Long-limb Roes",1],
                   11855:["Protein Delicacies",0.5],
                   3699:["Quafe",0.1],
                   42:["Spiced Wine",0.5],
                   9852:["Tobacco",0.2],
                   3673:["Wheat",1.15],
                   3812:["Data Sheets",1],
                   3687:["Electronic Parts",1],
                   41:["Garbage",0.25],
                   3773:["Hydrochloric Acid",0.5],
                   3685:["Hydrogen Batteries",1],
                   3643:["Soil",1.5],
                   3713:["Vitoc",0.5],
                   3723:["Slaver Hound",1],
                   3729:["Toxic Waste",1],
                   3721:["Slaves",5]
                 };*/

var hubs = {Jita: {region: 10000002, location: 60003760, name: "Jita"},
            Amarr: {region: 10000043, location: 60008494, name: "Amarr"},
            Dodixie: {region: 10000032, location: 60011866, name: "Dodixie"},
            Hek: {region: 10000042, location: 60005686, name: "Hek"},
            Oursulaert: {region: 10000064, location: 60011740, name: "Oursulaert"},
            Alentene: {region: 10000068, location: 60010300, name: "Alentene"},
            Stacmon: { region: 10000048, location: 60011893, name: "Stacmon" },
			Villore: { region: 10000064, location: 60009928, name: "Villore" },
			Frarn: { region: 10000030, location: 1031084757448, name: "Frarn" },
			Orvolle: { region: 10000048, location: 1033196707294, name: "Orvolle" },
			Amamake: { region: 10000030, location: 1022167642188, name: "Amamake" },
			Litiura: { region: 10000016, location: 60006844, name: "Litiura" },
			Vlillirier: { region: 10000048, location: 60001393, name: "Vlillirier" }};

var hubs_by_id = {60003760: hubs.Jita,
                  60008494: hubs.Amarr,
                  60004588: hubs.Rens,
                  60011866: hubs.Dodixie,
                  60005686: hubs.Hek,
                  60011740: hubs.Oursulaert,
                  60010300: hubs.Alentene,
                  60011893: hubs.Stacmon,
				  60009928: hubs.Villore,
				  1031084757448: hubs.Frarn,
				  1033196707294: hubs.Orvolle,
				  1022167642188: hubs.Amamake,
				  60006844: hubs.Litiura,
				  60001393: hubs.Vlillirier}
/*
var tradeble_ids = [34, 35, 36, 38, 638, 4051, 4246, 4247, 4347, 4349, 9848, 11399, 11993, 12005, 15632, 15681, 15806, 15963,
 16274, 16636, 16641, 16643, 16644, 16648, 16650, 16651, 16652, 16653, 16678, 16683, 17559, 17715, 17736,
 17738, 17740, 17887, 17888, 17889, 17918, 18789, 19045, 19191, 19198, 19200, 19207, 19208, 19359, 19417,
 19421, 20160, 20161, 20185, 25594, 25617, 25619, 25624, 25625, 28444, 28606, 28659, 28661, 28665, 28668,
 28710, 29984, 29986, 29990, 30251, 30744, 30745, 30746, 30747, 31796, 31930, 31932, 33468, 33470, 33472,
 33681, 33820, 33844, 34133, 35835, 40519, 40520, 41218, 44992, 45635, 47270, 47271, 47466, 48112, 48121,
 48582, 49711, 52252, 52568, 55826, 56202, 57457];*/
/*
var empire_regions = [10000054, 10000036, 10000043,
                     10000067, 10000052, 10000065, 10000020, 10000038,
                     10000016, 10000033, 10000002,
                     10000064, 10000037, 10000048, 10000032, 10000044, 10000068,
                     10000042, 10000030, 10000028,
                     10000049, 10000001];*/

var esi_host = 'https://esi-cache.pterippi.fi/';
/*
var mineraldata = JSON.parse("[{\"ore\":1230,\"composition\":[{\"mineral\":34,\"quantity\":415},{\"mineral\":35,\"quantity\":0},{\"mineral\":36,\"quantity\":0},{\"mineral\":37,\"quantity\":0},{\"mineral\":38,\"quantity\":0},{\"mineral\":39,\"quantity\":0},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":1228,\"composition\":[{\"mineral\":34,\"quantity\":346},{\"mineral\":35,\"quantity\":173},{\"mineral\":36,\"quantity\":0},{\"mineral\":37,\"quantity\":0},{\"mineral\":38,\"quantity\":0},{\"mineral\":39,\"quantity\":0},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":1224,\"composition\":[{\"mineral\":34,\"quantity\":351},{\"mineral\":35,\"quantity\":25},{\"mineral\":36,\"quantity\":50},{\"mineral\":37,\"quantity\":0},{\"mineral\":38,\"quantity\":5},{\"mineral\":39,\"quantity\":0},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":18,\"composition\":[{\"mineral\":34,\"quantity\":107},{\"mineral\":35,\"quantity\":213},{\"mineral\":36,\"quantity\":107},{\"mineral\":37,\"quantity\":0},{\"mineral\":38,\"quantity\":0},{\"mineral\":39,\"quantity\":0},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":1227,\"composition\":[{\"mineral\":34,\"quantity\":800},{\"mineral\":35,\"quantity\":100},{\"mineral\":36,\"quantity\":0},{\"mineral\":37,\"quantity\":85},{\"mineral\":38,\"quantity\":0},{\"mineral\":39,\"quantity\":0},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":20,\"composition\":[{\"mineral\":34,\"quantity\":134},{\"mineral\":35,\"quantity\":0},{\"mineral\":36,\"quantity\":267},{\"mineral\":37,\"quantity\":134},{\"mineral\":38,\"quantity\":0},{\"mineral\":39,\"quantity\":0},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":1226,\"composition\":[{\"mineral\":34,\"quantity\":0},{\"mineral\":35,\"quantity\":0},{\"mineral\":36,\"quantity\":350},{\"mineral\":37,\"quantity\":0},{\"mineral\":38,\"quantity\":75},{\"mineral\":39,\"quantity\":8},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":1231,\"composition\":[{\"mineral\":34,\"quantity\":2200},{\"mineral\":35,\"quantity\":0},{\"mineral\":36,\"quantity\":0},{\"mineral\":37,\"quantity\":100},{\"mineral\":38,\"quantity\":120},{\"mineral\":39,\"quantity\":15},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":21,\"composition\":[{\"mineral\":34,\"quantity\":0},{\"mineral\":35,\"quantity\":1000},{\"mineral\":36,\"quantity\":0},{\"mineral\":37,\"quantity\":200},{\"mineral\":38,\"quantity\":100},{\"mineral\":39,\"quantity\":19},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":1229,\"composition\":[{\"mineral\":34,\"quantity\":0},{\"mineral\":35,\"quantity\":2200},{\"mineral\":36,\"quantity\":2400},{\"mineral\":37,\"quantity\":300},{\"mineral\":38,\"quantity\":0},{\"mineral\":39,\"quantity\":0},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":1232,\"composition\":[{\"mineral\":34,\"quantity\":10000},{\"mineral\":35,\"quantity\":0},{\"mineral\":36,\"quantity\":0},{\"mineral\":37,\"quantity\":1600},{\"mineral\":38,\"quantity\":120},{\"mineral\":39,\"quantity\":0},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":1225,\"composition\":[{\"mineral\":34,\"quantity\":21000},{\"mineral\":35,\"quantity\":0},{\"mineral\":36,\"quantity\":0},{\"mineral\":37,\"quantity\":0},{\"mineral\":38,\"quantity\":760},{\"mineral\":39,\"quantity\":135},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":19,\"composition\":[{\"mineral\":34,\"quantity\":56000},{\"mineral\":35,\"quantity\":12050},{\"mineral\":36,\"quantity\":2100},{\"mineral\":37,\"quantity\":450},{\"mineral\":38,\"quantity\":0},{\"mineral\":39,\"quantity\":0},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":1223,\"composition\":[{\"mineral\":34,\"quantity\":0},{\"mineral\":35,\"quantity\":12000},{\"mineral\":36,\"quantity\":0},{\"mineral\":37,\"quantity\":0},{\"mineral\":38,\"quantity\":0},{\"mineral\":39,\"quantity\":450},{\"mineral\":40,\"quantity\":100},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":22,\"composition\":[{\"mineral\":34,\"quantity\":22000},{\"mineral\":35,\"quantity\":0},{\"mineral\":36,\"quantity\":2500},{\"mineral\":37,\"quantity\":0},{\"mineral\":38,\"quantity\":0},{\"mineral\":39,\"quantity\":0},{\"mineral\":40,\"quantity\":320},{\"mineral\":11399,\"quantity\":0}]},{\"ore\":11396,\"composition\":[{\"mineral\":34,\"quantity\":0},{\"mineral\":35,\"quantity\":0},{\"mineral\":36,\"quantity\":0},{\"mineral\":37,\"quantity\":0},{\"mineral\":38,\"quantity\":0},{\"mineral\":39,\"quantity\":0},{\"mineral\":40,\"quantity\":0},{\"mineral\":11399,\"quantity\":300}]}]");
var ore_flavors = {22: {plus_5: 17425, plus_10: 17426},
                   1223: {plus_5: 17428, plus_10: 17429},
                   1224: {plus_5: 17459, plus_10: 17460},
                   18: {plus_5: 17455, plus_10: 17456},
                   19: {plus_5: 17466, plus_10: 17467},
                   1230: {plus_5: 17470, plus_10: 17471},
                   1228: {plus_5: 17463, plus_10: 17464},
                   1225: {plus_5: 17432, plus_10: 17433},
                   1232: {plus_5: 17436, plus_10: 17437},
                   20: {plus_5: 17452, plus_10: 17453},
                   1229: {plus_5: 17865, plus_10: 17866},
                   1227: {plus_5: 17867, plus_10: 17868},
                   21: {plus_5: 17440, plus_10: 17441},
                   1231: {plus_5: 17444, plus_10: 17445},
                   1226: {plus_5: 17448, plus_10: 17449},
                   11396: {plus_5: 17869, plus_10: 17870}};*/
//var compressed_ores = []

function makeAjax(url, cb)
{
  return fetch(url)
          .then(response => cb(response.json(), response.statusText, response.headers));
}
/*
function ajaxPost(url, json_data, cb)
{
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: json_data
  };
  fetch(url, requestOptions)
        .then(response => response.json())
        .then(x => cb(x))
}*/

function range(start, end)
{
    return Array.from(Array(end + 1).keys()).filter(x => (x >= start));
}


var request_cache = {};
async function loadMultipageQuery(url)
{
    //'https://esi.tech.ccp.is/latest/markets/10000067/orders/?datasource=tranquility&type_id=3687&page=1'
    var timeout = 5000;
    var i_to = 3;
    if (request_cache[url])
    {
      if ((new Date() - request_cache[url].timestamp) < 300000)
      {
          return request_cache[url].d;
      }
    }
    while (true)
    {
      try
      {
        let result = await makeAjax(url+'&page=1', (data, textStatus, header) => {
                var pagecnt = header['x-pages'];
                //console.log(pagecnt);
                if (pagecnt > 1)
                {
                    let result = Promise.all(range(2,pagecnt).map(
                      pagenum => makeAjax(url+'&page='+pagenum, (x)=>x))
                    ).then(datas => datas.reduce((x,y) => x.concat(y), data))
                    return result;
                }
                else
                {
                  return data;
                }

            })
        if (!result.filter)
        {
        console.log(result)
        }
        request_cache[url] = {timestamp: new Date(), d: result};
        return result;
      }
      catch (e)
      {
        console.error(e)
        await new Promise(r => setTimeout(r, timeout));
        timeout *= i_to;
        i_to += 1;
      }
    }
}

function queryPrice(typeid, region, location, batchPriceLimit)
{

    return loadMultipageQuery(esi_host+'latest/markets/'+region+'/orders/?datasource=tranquility&type_id='+typeid)
        .then(data => data.filter(x => (!x.is_buy_order && x.location_id === location))
                          .sort((x, y) => (x.price - y.price))
                          .reduce((x, y) => ((x.total_cost < batchPriceLimit)?
                              {total_cost: batchPriceLimit < (x.total_cost + y.price*y.volume_remain)?batchPriceLimit:(x.total_cost + y.price*y.volume_remain),
                               total_cnt: batchPriceLimit < (x.total_cost + y.price*y.volume_remain)?(x.total_cnt + (batchPriceLimit - x.total_cost)/y.price):(x.total_cnt + y.volume_remain),
                               on_sale_volume: (x.on_sale_volume + y.volume_remain)}
                              :x), {total_cost: 0, total_cnt: 0, on_sale_volume: 0}))
        .then(x => ({id: typeid,
                     price: x.total_cnt > 0 ? (x.total_cost/x.total_cnt) : 0,
                     on_sale_volume: x.on_sale_volume}))
}

function queryLowestPrice(typeid, region, location)
{

    try
    {
    return loadMultipageQuery(esi_host+'latest/markets/'+region+'/orders/?datasource=tranquility&type_id='+typeid)
        .then(data => data.filter(x => (!x.is_buy_order && x.location_id === location))
                          .map(x => x.price)
                          .reduce((x,y) => Math.min(x, y), Infinity))
        .then(x => ({id: typeid,
                         price: x}))
    }
    catch (e)
    {
      return [];
    }
}

function queryCheapestOrder(typeid, region, location)
{
    try
    {
    return loadMultipageQuery(esi_host+'latest/markets/'+region+'/orders/?datasource=tranquility&type_id='+typeid)
        .then(data => data.filter(x => (!x.is_buy_order && x.location_id === location))
                          .sort((x, y) => (x.price - y.price))[0])
    }
    catch (e)
    {
      return [];
    }
}

function queryVolumeBelowPrice(typeid, treshold_price, region, location)
{
    try
    {
    return loadMultipageQuery(esi_host+'latest/markets/'+region+'/orders/?datasource=tranquility&type_id='+typeid)
        .then(data => data.filter(x => (!x.is_buy_order && x.location_id === location))
                          .filter(x => (x.price < treshold_price))
                          .reduce((x, y) => x + y.volume_remain, 0))
    }
    catch (e)
    {
      return [];
    }
}

function queryPriceHistoryAndVolume(typeid, region, period)
{

      try
      {
    return loadMultipageQuery(esi_host+'latest/markets/'+region+'/history/?datasource=tranquility&type_id='+typeid)
        .then(data => data.slice(-period)
                          .reduce((x, y) => ({total_cost: x.total_cost + y.average*y.volume,
                                              total_cnt: x.total_cnt + y.volume}),
                                            {total_cost: 0, total_cnt: 0}))
        .then(x => ({id: typeid,
                     avg_price: x.total_cnt > 0 ? (x.total_cost/x.total_cnt) : 0,
                     daily_volume: x.total_cnt/period}))
      }
      catch (e)
      {
        return [];
      }
}

async function calculateProfitability(types, start, dest, maxUnitPrice, maxUnitVolume, ignoredTypeIds, setReport, setQueryInProgress)
{
    let start_hub = hubs[start];
    let dest_hub = hubs[dest];
    let result = [];
    let types_and_prices = await Promise.all(types.map(async (x) => ({id: x.id,
                                         buy: await queryPrice(x.id, start_hub.region, start_hub.location, 100000000),
                                         sell: await queryPrice(x.id, dest_hub.region, dest_hub.location, 100000000),
                                         history: await queryPriceHistoryAndVolume(x.id, dest_hub.region, 14),
                                         info: x})));
    console.log(types_and_prices)
    let ignoredInLocation = ignoredTypeIds.filter(x => x[1] === dest_hub.location)
                                          .map(x => x[0]);
    result = types_and_prices.filter(x => !ignoredInLocation.includes(x.id) )
                             .map(x => ({id: x.id,
                                   price_delta: (x.sell.price > 0 ? x.sell.price : x.history.avg_price * 1.5) - x.buy.price,
                                   price_margin: 100*((x.sell.price > 0 ? x.sell.price : x.history.avg_price * 1.5) - x.buy.price)/(x.sell.price > 0 ? x.sell.price : x.history.avg_price * 1.5),
                                   history: x.history,
                                   sell: x.sell,
                                   buy: x.buy,
                                   info: x.info}))
                             .filter(x => x.buy.on_sale_volume > 0)
                             .filter(x => x.buy.price < maxUnitPrice*1000000)
                             .filter(x => x.info.volume < maxUnitVolume)
                             .filter(x => x.sell.on_sale_volume/x.history.daily_volume < 1)
                             .filter(x => x.price_margin > 0)
                             .sort((x, y) => (y.price_margin - x.price_margin))


    setReport(result);
    setQueryInProgress(false);
}


async function getSuggestedSellPrice(types, selectedTypes, dest, setReport, setQueryInProgress)
{
    let dest_hub = hubs[dest];
    let types_and_prices = await Promise.all(types.filter(x => selectedTypes.includes(x.id) )
                                                  .map(async (x) => ({id: x.id,
                                         sell: await queryLowestPrice(x.id, dest_hub.region, dest_hub.location, 100000000),
                                         history: await queryPriceHistoryAndVolume(x.id, dest_hub.region, 14),
                                         info: x})));
    console.log(types_and_prices)
    let result_unsorted = types_and_prices.map(x => ({id: x.id,
                                   history: x.history,
                                   sell: {price: Number(((x.sell.price < Infinity) ? (x.sell.price*0.995):(x.history.avg_price * 1.99)).toPrecision(4))},
                                   info: x.info}))
    let result = selectedTypes.map(tid => result_unsorted.filter(t => t.id === tid)[0])

    setReport(result);
    setQueryInProgress(false);
}


//var orders_cache = {}
/*
async function queryNPCOrdersInEmpires(typeid)
{
    if (orders_cache[typeid])
    {
        if (Date.now() - orders_cache[typeid].time < 300000)
        {
          return orders_cache[typeid].data;
        }
    }

    var orders_by_regions = Promise.all(empire_regions.map((region) => loadMultipageQuery(esi_host+'latest/markets/'+region+'/orders/?datasource=tranquility&type_id='+typeid)))
    var orders = [].concat.apply([], await orders_by_regions);
    //console.log(orders)
    var max_sell_volume = 0;
    var max_buy_volume = 0;
    var max_buy_price = 0;
    var min_sell_price = 100000000000000000;

    var sell_orders = orders.filter(x => (!x.is_buy_order && x.duration === 365));
    var buy_orders = orders.filter(x => (x.is_buy_order && x.duration === 365));
    sell_orders.map((x) => {
      if (x.volume_remain > max_sell_volume)
      {
        max_sell_volume = x.volume_remain;
      }
      if (x.price < min_sell_price)
      {
        min_sell_price = x.price ;
      }
    })
    buy_orders.map((x) => {
      if (x.volume_remain > max_buy_volume)
      {
        max_buy_volume = x.volume_remain;
      }
      if (x.price > max_buy_price)
      {
        max_buy_price = x.price ;
      }
    })

    sell_orders = sell_orders.filter(x => (x.price < max_buy_price));
    buy_orders = buy_orders.filter(x => (x.price > min_sell_price));
    sell_orders = sell_orders.filter(x => (x.volume_remain > 0.2*max_sell_volume));
    buy_orders = buy_orders.filter(x => (x.volume_remain > 0.2*max_buy_volume));


    orders_cache[typeid] = {time:Date.now(), data: [sell_orders, buy_orders]}
    return [sell_orders, buy_orders];
}
*//*
async function queryOrdersByLocation(typeid, region, threshold)
{
    var orders = await loadMultipageQuery(esi_host+'latest/markets/'+region+'/orders/?datasource=tranquility&type_id='+typeid)
        .then(data => data.filter(x => (!x.is_buy_order && x.price < threshold))
                          .sort((x, y) => (x.price - y.price)));

    var stations = orders.reduce((x, y) => x.add(y.location_id), new Set());

    var station_volume = []
    stations.forEach((v1,v2,s) => {station_volume.push([v1, orders.filter(x => x.location_id === v1)
                                                             .reduce((x, y) => ({oreid: typeid, total_cost: x.total_cost + y.price*y.volume_remain, total_cnt: x.tota_cnt + y.volume_remain}), {total_cost: 0, tota_cnt: 0})
                                                             ])});
    return station_volume;
}**/

/*
async function getStationJumps(id)
{
    var info = await makeAjax(esi_host+'latest/universe/stations/'+id+'/?datasource=tranquility', stinfo => [stinfo.name, stinfo.system_id]);

    var route = await makeAjax(esi_host+'latest/route/30002188/'+info[1]+'/?datasource=tranquility&flag=shortest', (x) => x);
    return [info[0], route];
}*/
/*
async function finalizeReport(ndata, stations_orders, stations_total, types, setReportData)
{
    var names = ndata.reduce((x, y) => {x[y.id]= y.name; return x; }, {});
    stations_total.sort((x,y)=>y[1]-x[1])


    var jumps = await Promise.all(stations_total.map(st => getStationJumps(st[0])));
    console.log(jumps)
        //
    var data = stations_total.map(st => [names[st[0]], jumps.filter(x=>x[0]===names[st[0]]).map(x=> x[1])[0], st[1], stations_orders.filter(x => x[0] === st[0]).map(x => [types[x[1].oreid], x[1].total_cost, x[1].total_cost/x[1].total_cnt])])
    console.log(data)
    setReportData(data)
    //$('#ore_report').html('<table>'+data.map(x => '<tr><td>'+[x[0],x[2],x[3].join('<br>')].join('</td><td>')+'</td></tr>').join('')+'</table>')
}*/
/*
async function processNamesAndRun(data, region, setReportData)
{
    var names = data.reduce((x, y) => {x[y.id]= y.name; return x; }, {});
    var mineral_prices = await Promise.all(minerals.map(x => queryPrice(x, 10000002, 60003760)))
        .then(x=> x.map((z) => {z.name = names[z.id]; return z;})
                               .reduce((a, x)=> {a[x.id] = x; return a;}, []))
    //[x.ore, ore_flavors[x.ore].plus_5, ore_flavors[x.ore].plus_10]
    var r=[]
    mineraldata.map(x => {r.push([x.ore, names[x.ore], x.composition.reduce((tot, mine) => tot + mine.quantity * mineral_prices[mine.mineral].price/100, 0)*refinerate]);
                          r.push([ore_flavors[x.ore].plus_5, names[ore_flavors[x.ore].plus_5], 1.05*x.composition.reduce((tot, mine) => tot + mine.quantity * mineral_prices[mine.mineral].price/100, 0)*refinerate]);
                          r.push([ore_flavors[x.ore].plus_10, names[ore_flavors[x.ore].plus_10], 1.10*x.composition.reduce((tot, mine) => tot + mine.quantity * mineral_prices[mine.mineral].price/100, 0)*refinerate]);
                          });

    var allstations = await Promise.all(r.map(x=> queryOrdersByLocation(x[0], region, x[2]))).then(x=>x.reduce((x,y) => x.concat(y)));
    var stations = Array.from(allstations.reduce((x, y) => x.add(y[0]), new Set()));
    var totals = stations.map(stid => [stid, allstations.filter(x => x[0] == stid).reduce((x,y) => x + y[1].total_cost, 0)])
    ajaxPost(esi_host+'latest/universe/names/?datasource=tranquility',
              JSON.stringify(stations),
              x=>finalizeReport(x, allstations, totals, names, setReportData))
}*/
//
//var refinerate = 0.7;
//var minerals=[34,35,36,37,38,39,40,11399];

//var allIds = mineraldata.map(x => [x.ore, ore_flavors[x.ore].plus_5, ore_flavors[x.ore].plus_10]).reduce((x,y)=>x.concat(y),minerals)


function Market() {
    /*var [reportData, setReportData] = useState([]);
    const [systemRange,setSystemRange]=useState([]);
    const [systemRangeLS,setSystemRangeLS]=useState([]);
    const [selectedRangeDB,setSelectedRangeDB]=useState("HS");
    const [systemName,setSystemName]=useState('');
    const [systemNameToId,setSystemNameToId]=useState([]);
    const [systemIdToName,setSystemIdToName]=useState([]);
    const [systemAutocomplete,setSystemAutocomplete]=useState([]);
    const [startSystemId,setStartSystemId]=useState(0);
    const [calculationResult,setCalculationResult]=useState([-1, [0, 0, 0]]);
    const [selectedWareId,setSelectedWareId]=useState(0);
    const [calculationProgress,setCalculationProgress]=useState(-1);
    const [taxRate,setTaxRate]=useState(5);*/
    const [activeTab,setActiveTab]=useState('1');
    /*const [multiWares, setMultiWares]=useState([]);
    const [processedWare, setProcessedWare]=useState(-1);
    const [multiResult, setMultiResult]=useState([]);*/

    // New states
    const [selectedStart,setSelectedStart]=useState("Jita");
    const [selectedEnd,setSelectedEnd]=useState("Amarr");
    //const [maxCargo,setMaxCargo]=useState(20000);
    const [maxValue,setMaxValue]=useState(60);
    const [maxUnitPrice,setMaxUnitPrice]=useState(30);
    const [maxUnitVolume,setMaxUnitVolume]=useState(500);
    const [profitReport,setProfitReport]=useState([]);
    const [tradableTypes, setTradableTypes]=useState([]);
    const [allTypes, setAllTypes]=useState([]);
    const [selectedTypes, setSelectedTypes]=useState([]);
    const [buyOrderLines, setBuyOrderLines]=useState([]);
    const [estimatedBuyVolume, setEstimatedBuyVolume]=useState(0);
    const [queryInProgress, setQueryInProgress]=useState(false);
    const [ignoreExistingOrders, setIgnoreExistingOrders]=useState(false);
    const [ignoredTypeIds, setIgnoredTypeIds]=useState([]);
    const [inventoryRaw, setInventoryRaw]=useState("");
    const [suggestedSell, setSuggestedSell]=useState([]);
    //const [undercutIsCorp, setUndercutIsCorp]=useState(false);
    const [underCutReport, setUnderCutReport]=useState([]);
    const [valueSplit, setValueSplit]=useState({label: "Equal", value: "equal"});

    let devMode = window.location.hostname.includes("localhost");

    if (devMode)
    {
      esi_host = 'https://esi.evetech.net/';
    }

    let maxPrice = maxValue*1000000;

    useEffect(()=>{
      /*fetch('ls_hs_system_to_system_range.json'
          ,{headers : {'Content-Type': 'application/json',
                       'Accept': 'application/json' }
          })
        .then(r => r.json())
        .then(j => setSystemRangeLS(j))
      fetch('hs_only_system_to_system_range.json'
          ,{headers : {'Content-Type': 'application/json',
                       'Accept': 'application/json' }
          })
        .then(r => r.json())
        .then(j => setSystemRange(j))
      fetch('system_to_id.json'
          ,{headers : {'Content-Type': 'application/json',
                       'Accept': 'application/json' }
          })
        .then(r => r.json())
        .then(j => {
          let result = {}
          Object.keys(j).map((x) => {
            result[x.toUpperCase()] = j[x];
          })
          setSystemNameToId(result)
        })
      fetch('id_to_system.json'
          ,{headers : {'Content-Type': 'application/json',
                       'Accept': 'application/json' }
          })
        .then(r => r.json())
        .then(j => setSystemIdToName(j))
      fetch('system_autocomplete.json'
          ,{headers : {'Content-Type': 'application/json',
                       'Accept': 'application/json' }
          })
        .then(r => r.json())
        .then(j => setSystemAutocomplete(j))*/
      fetch('tradable_types.json'
          ,{headers : {'Content-Type': 'application/json',
                       'Accept': 'application/json' }
          })
        .then(r => r.json())
        .then(j => setTradableTypes(j))
      fetch('all_market_items.json'
          ,{headers : {'Content-Type': 'application/json',
                       'Accept': 'application/json' }
          })
        .then(r => r.json())
        .then(j => setAllTypes(j))
    },[])

    let totalDailyTurnoverExpectation = buyOrderLines.map(x => x.sell.price*x.history.daily_volume).reduce((x,y) => x + y, 0);
    let totalConservativeDailyTurnoverExpectation = buyOrderLines.map(x => x.sell.price*(x.history.daily_volume > x.sell.on_sale_volume ? x.history.daily_volume - x.sell.on_sale_volume : 0)).reduce((x,y) => x + y, 0);



    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    /*const findBestRoute = async (orders, start) =>
    {
      let maxVolume = maxCargo;
      let maxPrice = maxValue*1000000;
      var [sell_orders, buy_orders] = orders;
      let length = -1;
      let profit = 0;
      let bestProfitPerJump = 0;
      let shortest_systems = [];
      let bestOperationItemCount = 0;
      let bestOperationItemVolume = 0;
      let range_db = systemRange;

      if (selectedRangeDB == "HS")
      {
        range_db = systemRange;
      } else if (selectedRangeDB == "LS")
      {
        range_db = systemRangeLS;
      }

      for (let i = 0; i < sell_orders.length; i++){
        let so = sell_orders[i]
        setCalculationProgress(i/sell_orders.length)
        await new Promise(r => setTimeout(r, 50));
        buy_orders.map(bo => {
          console.log(start,so.system_id,bo.system_id)
          var range = 2;
          if (so.system_id !== start)
          {
            console.log('sell start',range_db[so.system_id][start])
            if (!(range_db[so.system_id][start] > -1))
            {
                return;
            }
            range += range_db[so.system_id][start]
          }
          if (so.system_id !== bo.system_id)
          {
            //console.log('sell buy',range_db[so.system_id][bo.system_id])
            if (!(range_db[so.system_id][bo.system_id] > -1))
            {
                return;
            }
            range += range_db[so.system_id][bo.system_id]
          }
          //console.log(range, range_db[so.system_id][start], range_db[so.system_id][bo.system_id])
          if (!(range > -1))
          {
            return;
          }
          let maxVolumeFromCost = Math.floor(maxPrice / so.price);
          let maxVolumeFromCargo = Math.floor(maxVolume / commodities[so.type_id][1]);
          let operationItemCount = Math.min(so.volume_remain, bo.volume_remain, maxVolumeFromCost, maxVolumeFromCargo);
          let operationItemVolume = operationItemCount*commodities[so.type_id][1].toFixed(1);
          let profitPerJump = (bo.price * (100 - taxRate)/100 - so.price) * Math.min(so.volume_remain, bo.volume_remain, maxVolumeFromCost, maxVolumeFromCargo) / range;
          if (bestProfitPerJump < profitPerJump)
          {
            bestOperationItemCount = operationItemCount;
            bestOperationItemVolume = operationItemVolume;
            bestProfitPerJump = profitPerJump;
            length = range;
            shortest_systems = [start,so.system_id,bo.system_id, so.location_id, bo.location_id,
                                so.price, so.volume_remain, bo.price, bo.volume_remain];
          }
        })
      }
      setCalculationProgress(1)
      //console.log([length, shortest_systems, bestProfitPerJump, length * bestProfitPerJump, bestOperationItemCount, bestOperationItemVolume])
      return [length, shortest_systems, bestProfitPerJump, length * bestProfitPerJump, bestOperationItemCount, bestOperationItemVolume]
    }*/
  let _estimatedBuyVolume = 0;

  return (
    <Container style={{minHeight:"100vh", padding:"2rem"}}>
    <Col sm="12" lg={{size:8, offset:2}} xl={{size:6, offset:3}} style={{background: "#406AB2", borderRadius:"1rem", opacity:"80%"}}>
    <Nav tabs>
    <NavItem>
      <NavLink
        className={classnames({ active: activeTab === '1' })}
        onClick={() => { toggle('1'); }}
        style={{color: "#E3D370", fontSize:"1.2rem"}}
      >
        <b>Buy order generator</b>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={classnames({ active: activeTab === '2' })}
        onClick={() => { toggle('2'); }}
        style={{color: "#E3D370", fontSize:"1.2rem"}}
      >
       <b>Sell apprisal</b>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={classnames({ active: activeTab === '3' })}
        onClick={() => { toggle('3'); }}
        style={{color: "#E3D370", fontSize:"1.2rem"}}
      >
       <b>Undercut checker</b>
      </NavLink>
    </NavItem>
  </Nav>

    <TabContent activeTab={activeTab}>
    <TabPane tabId="1"
    style={{paddind:"0.3rem", color: "#E3D370"}}>
    <div>
      <Col>
        <Row className="d-flex justify-content-between align-items-center" style={{margin:"0.6rem"}}>From hub:
      <Col style={{color: "black", maxWidth:"50%"}}><Select
          isMulti={false}
          value={{label: selectedStart, name: hubs[selectedStart].name}}
          onChange={x => setSelectedStart(x.value)}
          options={Object.keys(hubs).map(x=> ({value: x, label: hubs[x].name}))}
        /></Col></Row>
        <Row className="d-flex justify-content-between align-items-center" style={{margin:"0.6rem"}}>To hub:
      <Col style={{color: "black", maxWidth:"50%"}}><Select
            isMulti={false}
            value={{label: selectedEnd, name: hubs[selectedEnd].name}}
            onChange={x => setSelectedEnd(x.value)}
            options={Object.keys(hubs).map(x=> ({value: x, label: hubs[x].name}))}
          /></Col></Row>
        {/*}<Row className="d-flex justify-content-between align-items-center"  style={{margin:"0.6rem"}}>Max cargo volume, m3: <Input style={{width: "50%"}} type="number" min={0} max={2000000} step={1} value={maxCargo} onChange={(x) => setMaxCargo(x.target.value)}></Input></Row>*/}
        <Row className="d-flex justify-content-between align-items-center"  style={{margin:"0.6rem"}}>Max cargo value, MISK: <Input style={{width: "50%"}} type="number" min={0} max={2000} step={0.01} value={maxValue} onChange={(x) => setMaxValue(x.target.value)}></Input></Row>
        <Row className="d-flex justify-content-between align-items-center"  style={{margin:"0.6rem"}}>Max unit price, MISK: <Input style={{width: "50%"}} type="number" min={0} max={2000} step={0.01} value={maxUnitPrice} onChange={(x) => setMaxUnitPrice(x.target.value)}></Input></Row>
        <Row className="d-flex justify-content-between align-items-center"  style={{margin:"0.6rem"}}>Max unit volume, m3: <Input style={{width: "50%"}} type="number" min={0} max={200000} step={1} value={maxUnitVolume} onChange={(x) => setMaxUnitVolume(x.target.value)}></Input></Row>
        {devMode?(<Row className="d-flex justify-content-between align-items-center" style={{margin:"0.6rem"}}>Buy order split:
        <Col style={{color: "black", maxWidth:"50%"}}><Select
              isMulti={false}
              value={valueSplit}
              onChange={x => setValueSplit(x)}
              options={[{label: "Equal", value: "equal"},
                        {label: "Proportional to expected turnover", value: "proportional"},
                        {label: "Proportional to conservative expected turnover", value: "proportional_conservative"}]}
            /></Col></Row>):null}
        <Row className="d-flex justify-content-between align-items-center"  style={{margin:"0.6rem"}}>
          <Button color="primary" onClick={() => setIgnoreExistingOrders(!ignoreExistingOrders)} active={ignoreExistingOrders}>Ignore existing orders</Button>
        </Row>
        {ignoreExistingOrders?(
          <Row className="d-flex justify-content-between align-items-center"  style={{margin:"0.6rem"}}>
            <Dropzone onDrop={(acceptedFiles) => {
                  acceptedFiles.forEach((file) => {
                    const reader = new FileReader()

                    reader.onabort = () => alert('Cannot read the file. Please try again.')
                    reader.onerror = () => alert('Cannot read the file. Please try again.')
                    reader.onload = () => {
                      //let ignoredIds = [];
                      const fileData = reader.result;

                      let lines = fileData.split("\n")
                      console.log(lines[0].split(","))
                      let header = lines[0].split(",");
                      let location_index = header.indexOf("stationID");
                      let type_index = header.indexOf("typeID");
                      let data = lines.slice(1).map(l => [parseInt(l.split(",")[type_index]), parseInt(l.split(",")[location_index])]);
                      console.log('setIgnoredTypeIds',data);
                      setIgnoredTypeIds(data)
                    }
                    reader.readAsText(file)
                  })}}>
              {({getRootProps, getInputProps}) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop latest market order export here</p>
                    {(ignoredTypeIds.length > 0 ? (<p>Currently ignoring {ignoredTypeIds.filter(x => x[1] === hubs[selectedEnd].location).length} types.</p>):(<p></p>))}
                  </div>
                </section>
              )}
            </Dropzone>
          </Row>):(<Row></Row>)}
        <Row className="p-5"><Button className="padded" color="info" disabled={queryInProgress} onClick={
            ()=>[setQueryInProgress(true),
            setBuyOrderLines([]),
            setSelectedTypes([]),
            calculateProfitability(tradableTypes, selectedStart, selectedEnd, maxUnitPrice, maxUnitVolume, ignoreExistingOrders ? ignoredTypeIds : [], setProfitReport, setQueryInProgress, setEstimatedBuyVolume)]
          }>{queryInProgress?"Loading and calculating. Please wait.":"Query best deals"}</Button></Row>

        {buyOrderLines.length > 0 ? (<Row className="d-flex justify-content-between align-items-center" style={{margin:"0.6rem"}}>
        <Col>
          <h3>Generated buy order</h3>
          <Row className="d-flex justify-content-center align-items-center"  style={{margin:"0.6rem"}}>
            <table style={{margin:"0.6rem"}}>
            {buyOrderLines.map(x => <tr key={JSON.stringify(x) + new Date()}><td>{x.info.name}</td><td>{
              ((() => {
                  let volumeToBuy = 0;
                  if (valueSplit.value === "equal")
                  {
                    volumeToBuy = (maxPrice/buyOrderLines.length/x.buy.price).toFixed(0);
                  } else if (valueSplit.value === "proportional")
                  {
                    volumeToBuy = (x.buy.price*x.history.daily_volume / totalDailyTurnoverExpectation * maxPrice /x.buy.price).toFixed(0);
                  } else if (valueSplit.value === "proportional_conservative")
                  {
                    volumeToBuy = (x.buy.price*(x.history.daily_volume > x.sell.on_sale_volume ? x.history.daily_volume - x.sell.on_sale_volume : 0)/ totalConservativeDailyTurnoverExpectation * maxPrice /x.buy.price).toFixed(0);
                  }
                  _estimatedBuyVolume += volumeToBuy * x.info.volume;
                  return volumeToBuy;
              })())
              }</td></tr>)}
            </table>
          </Row>
          <Row className="d-flex justify-content-center align-items-center"  style={{margin:"0.6rem"}}>Estimated buy order volume is: {_estimatedBuyVolume.toFixed(2)} m3</Row>
        </Col></Row>) : (<Row/>)}
        <Row>
          {profitReport.length > 0 ? (<Col><Row><h3>Best items to haul</h3></Row>
          <Row style={{margin:"0.6rem"}}><Table dark striped><thead>
            <tr><th></th><th>Item</th><th>Competition, h</th><th>Margin, %</th><th>ISK/m3</th></tr></thead><tbody>
            {
              profitReport.slice(0,60).map(x => (<tr key={JSON.stringify(x) + new Date()}>

              <td>
                <Input type="checkbox" checked={selectedTypes.includes(x.id)} onChange={e => {
                    console.log(selectedTypes)
                    if (e.target.checked)
                    {
                       if (!selectedTypes.includes(x.id))
                       {
                         selectedTypes.push(x.id);
                         setSelectedTypes(selectedTypes.slice());
                         setBuyOrderLines(profitReport.filter(x => selectedTypes.includes(x.id) ));
                       }
                    }
                    else {
                       if (selectedTypes.includes(x.id))
                       {
                         let newList = selectedTypes.filter( y => y !== x.id);
                         setSelectedTypes(newList);
                         setBuyOrderLines(profitReport.filter(x => newList.includes(x.id) ));
                       }
                    }
                  }}/>
              </td>
              <td className="text-left">
                {x.info.name}
              </td>
              <td>{((x.sell.on_sale_volume / x.history.daily_volume)*24).toFixed(1)}</td>
              <td>{x.price_margin.toFixed(1)}</td>
              <td>{(x.buy.price / x.info.volume).toFixed(0.1)}</td></tr>))
            }
          </tbody></Table></Row></Col>):(<div></div>)}
        </Row>
      </Col>
    </div>
    </TabPane>
    </TabContent>

    <TabContent activeTab={activeTab}>
    <TabPane tabId="2"
    style={{paddind:"0.3rem", color: "#E3D370"}}>
    <Row className="d-flex justify-content-between align-items-center" style={{margin:"0.6rem"}}>In hub:
  <Col style={{color: "black", maxWidth:"50%"}}><Select
          isMulti={false}
          value={{label: selectedEnd, name: hubs[selectedEnd].name}}
          onChange={x => setSelectedEnd(x.value)}
          options={Object.keys(hubs).map(x=> ({value: x, label: hubs[x].name}))}
        /></Col>
      </Row>
    <Row className="d-flex justify-content-between align-items-center" style={{margin:"0.6rem"}}>
      <textarea className="w-100"
                onChange={(x)=>setInventoryRaw(x.target.value)}
                placeholder="Paste your inventory here and get suggested sell prices based on the latest competition info"
                value={inventoryRaw}>
      </textarea>
    </Row>
    <Row className="d-flex justify-content-between align-items-center" style={{margin:"0.6rem"}}>
      <Button color="info" onClick={()=>{
          let lines = inventoryRaw.split('\n');
          let typenames = lines.map(l => l.split('\t')[0]).filter(l => l.length > 0);
          let selectedTypes = typenames.map( tn => {
              let tmp = allTypes.filter(t => t.name === tn);
              if (tmp.length === 0)
                  return [];
              return tmp[0].id}).reverse();
          console.log(typenames)
          if (selectedTypes.length > 0)
            getSuggestedSellPrice(allTypes, selectedTypes, selectedEnd, setSuggestedSell, setQueryInProgress);
          else
            setSuggestedSell([])
        }}>{queryInProgress?"Loading and calculating. Please wait.":"Get suggested sell prices"}</Button>
    </Row>
    <Row className="d-flex justify-content-between align-items-center" style={{margin:"0.6rem"}}>
      <Table dark striped><thead>
        <tr><th>Item</th><th>Suggested sell price</th></tr></thead><tbody>
      {suggestedSell.map((x)=>x?(<tr><th>{x.info.name}</th><th>{x.sell.price.toFixed(2)}</th></tr>):null)}
      </tbody></Table>
    </Row>

    </TabPane>
  </TabContent>

  <TabContent activeTab={activeTab}>
  <TabPane tabId="3"
  style={{paddind:"0.3rem", color: "#E3D370"}}>
  <p style={{margin:"1rem", color: "white"}}>Select recent export of corporation or personal orders to check if you need to update the price</p>
    <Row className="d-flex justify-content-between align-items-center"  style={{margin:"0.6rem"}}>
      <Dropzone onDrop={(acceptedFiles) => {
            acceptedFiles.forEach((file) => {
              const reader = new FileReader()

              reader.onabort = () => alert('Cannot read the file. Please try again.')
              reader.onerror = () => alert('Cannot read the file. Please try again.')
              reader.onload = async () => {
                //let ignoredIds = [];
                const fileData = reader.result;

                let lines = fileData.split("\n")
                console.log(lines[0].split(","))
                let header = lines[0].split(",");
                let order_index = header.indexOf("orderID");
                let location_index = header.indexOf("stationID");
                let region_index = header.indexOf("regionID");
                let type_index = header.indexOf("typeID");
                let name_index = header.indexOf("charName");
                let price_index = header.indexOf("price");
                let data = lines.slice(1).map(l => ({"type": parseInt(l.split(",")[type_index]),
                                                    "location": parseInt(l.split(",")[location_index]),
                                                    "name": l.split(",")[name_index],
                                                    "order": parseInt(l.split(",")[order_index]),
                                                    "region": parseInt(l.split(",")[region_index]),
                                                    "price": parseFloat(l.split(",")[price_index])}))
                                         .filter(x => hubs_by_id[x.location])
                                         .filter(x => allTypes.filter(y => y.id === x.type).length)
                                         .map(x => ({"type_name": allTypes.filter(y => y.id === x.type)[0].name,
                                                    "location_name": hubs_by_id[x.location].name,
                                                    "trader_name": x.name,
                                                    "order_id": x.order,
                                                    "type_id": x.type,
                                                    "region": x.region,
                                                    "location": x.location,
                                                    "price": x.price}))
                                         .sort((x,y) => (x.type_name > y.type_name)?1:-1)
                                         .sort((x,y) => (x.location_name > y.location_name)?1:-1)
                                         .sort((x,y) => (x.trader_name > y.trader_name)?1:-1);
                let my_orders = data.map(x => x.order_id)
                let cheapest_orders = (await Promise.all(data.map(async (o) => ({my: o,
                                                                                 cheapest: await queryCheapestOrder(o.type_id,o.region,o.location),
                                                                                 undercut: await queryVolumeBelowPrice(o.type_id,o.price,o.region,o.location),
                                                                                 history: await queryPriceHistoryAndVolume(o.type_id,o.region, 30)}))))
                                      .filter(x => !my_orders.includes(x.cheapest.order_id))
                                      .map(x => [x.my.trader_name,
                                                 x.my.location_name,
                                                 x.my.type_name,
                                                 Number((x.cheapest.price*0.995).toPrecision(4)),
                                                 ((x.my.price - Number((x.cheapest.price*0.995).toPrecision(4)))/x.my.price*100).toFixed(1),
                                                 (x.undercut/x.history.daily_volume * 24).toFixed(1)])

                console.log(cheapest_orders);
                console.log(data);
                setUnderCutReport(cheapest_orders)
              }
              reader.readAsText(file)
            })}}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop latest market order export here</p>
            </div>
          </section>
        )}
      </Dropzone>
    </Row>
    <Row className="d-flex justify-content-between align-items-center" style={{margin:"0.6rem"}}>
      {(underCutReport.length > 0 ?
        (<Table dark={true} striped={true}><thead><tr>
                                    <th>Trader</th>
                                    <th>Hub</th>
                                    <th>Item</th>
                                    <th>Suggested price</th>
                                    <th>Discount, %</th>
                                    <th>Undercutting volume, h</th>
                                  </tr></thead><tbody>
          {underCutReport.map(x => (<tr>
                                      <td>{x[0]}</td>
                                      <td>{x[1]}</td>
                                      <td>{x[2]}</td>
                                      <td>{x[3]}</td>
                                      <td>{x[4]}</td>
                                      <td>{x[5]}</td>
                                    </tr>))}
        </tbody></Table>):(<table></table>))}
    </Row>

  </TabPane>
</TabContent>

  <center className="m-2"
        style={{
        	zIndex: -100,
        	position: "relative"
        }}>
      <Card style={{maxWidth: "80%"}}>

        <CardImg src={latest_thumbnail}></CardImg>
      <CardBody>
        <CardTitle>Level up your hauling game in EVE online with market analysis tools. Part 1</CardTitle>
      <Button color="success" onClick={()=> window.open("https://www.youtube.com/watch?v=lIxXnVrRH7U", "_blank")}>Watch on YouTube</Button>
      </CardBody>
      </Card>
    </center>
    <div className="footerSpacer"></div>
    <div className="fixed-bottom responsiveFooter">
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand className="w-100">
                <NavLink style={{color: "white"}} className="w-100" href="https://pterippi.fi">
                <Row className="d-flex w-100 flex-row justify-content-around align-items-center">
                <Col sm={12} lg={6}>
                <img alt="Logo of Pterippi Oy"
                     style={{maxHeight: "5vh",
                             filter: "brightness(0) invert(1)"}}
                     src="https://pterippi.fi/static/media/pterippi-logo.80fae1c3.png"/>
                </Col>
                <Col sm={12} lg={6} className="text-wrap">This tools was developed by Pterippi Oy.<br/>Contact us if you need custom digital tools for your business.</Col></Row></NavLink></NavbarBrand>
              <NavbarBrand className="w-100 text-wrap text-muted" style={{fontSize:"0.6rem"}}>2021 (c) Pterippi Oy. All rights reserved. Data is provided by ESI API courtesy of CCP Games. <br/>
              EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide.

              All other trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf. CCP hf. has granted permission to eveonlineships.com to use EVE Online and all associated logos and designs for promotional and information purposes on its website but does not endorse, and is not in any way affiliated with, eveonlineships.com.

              CCP is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website.
        </NavbarBrand>
            </Container>
        </Navbar>
    </div>
  </Col>
  </Container>
  );
}

export default Market;
