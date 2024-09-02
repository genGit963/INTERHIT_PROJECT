import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../core/navigation-type';
import {Colors} from '../../../constants/Color';
import WebView from 'react-native-webview';
import TabScreenTopTitle from '../../../components/TabScreenTopTitle';
import {treeDummyData} from '../../../data/tree-dummy-data';
// types and interface
type GenealogyTabScreenProps = {} & AppScreenNavigationType;

// ----------------- Genealogy Tab Screen ---------------------
const GenealogyTabScreen: React.FC<GenealogyTabScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        {/* <TabScreenTopTitle screenTitle={'Genealogy'} /> */}

        {/*  Screen Body */}
        <WebView
          source={{
            html: htmlText,
          }}
          style={{flex: 1, width: '100%', height: '100%'}}
          originWhitelist={['*']}
        />
      </SafeAreaView>
    </View>
  );
};

let htmlText: string = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vertical Family Tree Chart</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }

        h2 {
            margin-top: 10px;
            font-size: 18px;
            text-align: center;
        }

        #tree-container {
            margin-top: 10px;
            width: 100%;
            height: 100vh;
            overflow-y: scroll;
        }

        .node circle {
            fill: #3498db;
            stroke: steelblue;
            stroke-width: 3px;
        }

        .node text {
            font-size: 10px;
            fill: #333;
        }

        .link {
            fill: none;
            stroke: #ccc;
            stroke-width: 2px;
        }

        .node-image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .node-content {
            display: flex;
            align-items: center;
        }

        /* Media query to ensure it works well on mobile devices */
        @media (min-width: 768px) {
            body {
                display: none; /* Hide the content on larger screens */
            }
        }
    </style>
</head>
<body>
    <h2>Vertical Family Tree Chart</h2>
    <div id="tree-container"></div>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script>
        // Updated dummy tree data with depth level 3
        const treeData = {
            "id": 100,
            "firstName": "Rishi",
            "imgurl": "https://media.istockphoto.com/id/1352025984/photo/headshot-of-cheerful-young-businessman.jpg?s=612x612&w=0&k=20&c=6LxOFkwfu3XYgfySJfI1uTpP1JUX4ZIgl_1CdpQBk3s=",
            "children": [
                {
                    "id": 102,
                    "firstName": "Jane",
                    "imgurl": "https://media.istockphoto.com/id/1352025984/photo/headshot-of-cheerful-young-businessman.jpg?s=612x612&w=0&k=20&c=6LxOFkwfu3XYgfySJfI1uTpP1JUX4ZIgl_1CdpQBk3s=",
                    "children": [
                        {
                            "id": 103,
                            "firstName": "Emily",
                            "imgurl": "https://media.istockphoto.com/id/1352025984/photo/headshot-of-cheerful-young-businessman.jpg?s=612x612&w=0&k=20&c=6LxOFkwfu3XYgfySJfI1uTpP1JUX4ZIgl_1CdpQBk3s=",
                            "children": [
                                {
                                    "id": 104,
                                    "firstName": "Sam",
                                    "imgurl": "https://media.istockphoto.com/id/1352025984/photo/headshot-of-cheerful-young-businessman.jpg?s=612x612&w=0&k=20&c=6LxOFkwfu3XYgfySJfI1uTpP1JUX4ZIgl_1CdpQBk3s="
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        // Set the dimensions and margins of the diagram
        const margin = {top: 20, right: 40, bottom: 20, left: 40},
            width = window.innerWidth - margin.left - margin.right,
            height = 1200 - margin.top - margin.bottom;

        // Appends the svg object to the body of the page
        const svg = d3.select("#tree-container").append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Creates a tree layout and assigns the size
        const treemap = d3.tree().size([height, width]);

        // Assigns the data to a hierarchy using parent-child relationships
        const nodes = d3.hierarchy(treeData);

        // Maps the node data to the tree layout
        const treeNodes = treemap(nodes);

        // Adds the links between the nodes
        const link = svg.selectAll(".link")
            .data(treeNodes.descendants().slice(1))
          .enter().append("path")
            .attr("class", "link")
            .attr("d", function(d) {
               return "M" + d.x + "," + d.y
                    + "C" + d.x + "," + (d.y + d.parent.y) / 2
                    + " " + d.parent.x + "," + (d.y + d.parent.y) / 2
                    + " " + d.parent.x + "," + d.parent.y;
            });

        // Adds each node as a group
        const node = svg.selectAll(".node")
            .data(treeNodes.descendants())
          .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { 
                return "translate(" + d.x + "," + d.y + ")"; });

        // Adds image to each node
        node.append("foreignObject")
            .attr("width", 40)
            .attr("height", 40)
            .append("xhtml:div")
            .attr("class", "node-content")
            .html(function(d) {
                return d.data.imgurl ? \`<img class="node-image" src="\${d.data.imgurl}" alt="\${d.data.firstName}">\` : '';
            });

    </script>
</body>
</html>`;

export const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.screenBackground,
    flex: 1,
  },
  Screen: {
    backgroundColor: Colors.screenBackground,
    height: '100%',
    width: '100%',
  },
});

export default GenealogyTabScreen;
