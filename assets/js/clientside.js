window.dash_clientside = Object.assign({}, window.dash_clientside, {
    clientsideSigma: {
        tabChangeFigRender: function(rawData, oversampingData, switchValue=[false]) {
            let data = [];
            let layout = {
                "xaxis": {"dtick": 1, "tick0": -2, "type": "log", "title": {"text": "Time (s)"}},
                "yaxis": {"title": {"text" : "G(t) (Pa)"}},
            }
            let rawDataTrace = {
                "hovertemplate": "x=%{x}<br>y=%{y}<extra></extra>", 
                "name": "Experiental Data",
                "mode": "markers",
                "marker": {"symbol": "circle-open", "size": 12},
                "x": rawData.x,
                "y": rawData.y
            }

            /**
            * Only oversamping button on and oversampingData has value to render Oversamping figure.
            * You may feel wired about the switchValue is [bool] not bool.
            * It's the Dash's wired part... Just follow the framework's rule.
            */
            if (switchValue[0] == true && oversampingData != undefined) {
                console.log("========= in oversamping =======");
                // console.log(oversampingData)
                // data = oversampingData;
                let oversampingDataTrace = {
                    "name": "Oversamping Data",
                    "mode": "markers",
                    "marker": {"symbol": "circle-x", "size": 6},
                    "x": oversampingData.x,
                    "y": oversampingData.y
                }
                
                data.push(rawDataTrace, oversampingDataTrace);
            } else {
                console.log("========= in sigma =============");
                // console.log(rawData)
                // data = rawData;
                data.push(rawDataTrace);
            }
    
            return {
                "data" : data,
                "layout": layout
            }   
        }
    }
});