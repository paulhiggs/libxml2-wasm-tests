import { XmlDocument, XsdValidator, XmlValidateError } from "libxml2-wasm";

let docTxt = `<?xml version="1.0" encoding="UTF-8"?>
<ServiceList version="1" id="tag:dvb.org,2024:ref-prominence" xml:lang="en"
    xmlns="urn:dvb:metadata:servicediscovery:2024" xmlns:dvbi-types="urn:dvb:metadata:servicediscovery-types:2023" xmlns:tva="urn:tva:metadata:2024"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:dvb:metadata:servicediscovery:2024 schemas/dvbi_v6.0.xsd">
  <Name>DVB-I example service list</Name>
  <ProviderName>DVB</ProviderName>
  <LCNTableList>
    <LCNTable>
      <LCN channelNumber="1" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-1"/>
      <LCN channelNumber="2" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-2"/>
      <LCN channelNumber="3" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-3"/>
      <LCN channelNumber="4" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-4"/>
      <LCN channelNumber="5" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-5"/>
      <LCN channelNumber="6" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-6"/>
      <LCN channelNumber="7" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-7"/>
      <LCN channelNumber="8" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-8"/>
      <LCN channelNumber="9" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-9"/>
      <LCN channelNumber="10" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-10"/>
      <LCN channelNumber="11" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-100"/>
      <LCN channelNumber="12" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-1000"/>
      <LCN channelNumber="13" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-1001"/>
      <LCN channelNumber="14" serviceRef="tag:dvb-i-referenceapp,2023:Ranking-None"/>
    </LCNTable>
  </LCNTableList>
  <ContentGuideSource CGSID="cgid-1">
    <ProviderName>DVB-I Reference Application</ProviderName>
    <ScheduleInfoEndpoint contentType="application/xml">
      <dvbi-types:URI>INSTALL~~LOCATION/backend/schedule.php</dvbi-types:URI>
    </ScheduleInfoEndpoint>
    <ProgramInfoEndpoint contentType="application/xml">
      <dvbi-types:URI>INSTALL~~LOCATION/backend/program_information.php</dvbi-types:URI>
    </ProgramInfoEndpoint>
    <MoreEpisodesEndpoint contentType="application/xml">
      <dvbi-types:URI>INSTALL~~LOCATION/backend/more_episodes.php</dvbi-types:URI>
    </MoreEpisodesEndpoint>
  </ContentGuideSource>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-1</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
        <!-- two line
           comment -->
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
        <!-- whack in a single line comment -->
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 1</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="1"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-2</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 2</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="2"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-3</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 3</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="3"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-4</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 4</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="4"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-5</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 5</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="5"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-6</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 6</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="6"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-7</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 7</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="7"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-8</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 8</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="8"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-9</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 9</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="9"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-10</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking A</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="10"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-100</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 100</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="100"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-1000</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 1000</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="1000"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-1001</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking 1001</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence ranking="1001"></Prominence>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-None</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service Ranking None</ServiceName>
    <ProviderName>DVB</ProviderName>
    <ProminenceList>
      <Prominence/>
    </ProminenceList>
  </Service>
  <Service version="1">
    <UniqueIdentifier>tag:dvb-i-referenceapp,2023:Ranking-NotProminent</UniqueIdentifier>
    <ServiceInstance priority="1">
      <DASHDeliveryParameters>
        <UriBasedLocation contentType="application/dash+xml">
          <dvbi-types:URI>https://refapp.hbbtv.org/livesim/02_llamanofragv1/manifest.mpd</dvbi-types:URI>
        </UriBasedLocation>
      </DASHDeliveryParameters>
    </ServiceInstance>
    <ServiceName>Service No Prominence</ServiceName>
    <ProviderName>DVB</ProviderName>
  </Service>
</ServiceList>
`;

/*
function qualifyName(node) {
	return (node.namespacePrefix && node.namespacePrefix.length ? `${node.namespacePrefix}:` : "") + node.name;
}
*/

let qualifyName = (node) => (node.namespacePrefix && node.namespacePrefix.length ? `${node.namespacePrefix}:` : "") + node.name;

//let isLeafElement = (node) => (node.__proto__.constructor.name == "XmlElement" && node.name != null);

// to be a leaf node, all child nodes must be textual
function isLeafElement(node) {
  let leaf=true, kid = node.firstChild;
  while (leaf && kid) {
    if (kid.__proto__.constructor.name != "XmlText")
      leaf = false;
    kid = kid.next;
  }
  return leaf;
}


function PrettyPrint(node, indent = "") {
    if (!node || !node?.name) return "";
    let isStructureElement = (node) => (node.__proto__.constructor.name == "XmlElement");
  /*  
    let isStructureElement = (node) => {
        let rc = false;
        let c = node.firctChild;
        while (c && !rc) {
            if (node.__proto__.constructor.name ==  "XmlElement")
                rc = true;
            c = c.next;
        }
        return rc;
    };
*/
    
    let t = indent + "<" + qualifyName(node);

    console.log(`node: ${node.name} is type ${node.__proto__.constructor.name} --> "${node.content}"  (${isLeafElement(node)})`);
    if (node.attrs)
        node.attrs.forEach((a) => {
            t += ` ${qualifyName(a)}="${a.value}"`;
        });
    if (isLeafElement(node)) {
        t += node.content.length ? `>${node.content}</${qualifyName(node)}>` : "/>";
    }
    else
        t += (node.firstChild ? ">" : "/>");
    let child = node.firstChild;
    while (child) {
				console.log(`child: ${child.name} is type ${child.__proto__.constructor.name} --> "${child.content}"  (${isStructureElement(node)})`);
        if (child.__proto__.constructor.name == "XmlComment")
          t += `\n${indent}<!--${child.content}-->`;
        else if (isStructureElement(child))
            t += "\n" + PrettyPrint(child, indent + "  ");
        child = child.next;
    }
    t += !isLeafElement(node) ? `\n${indent}</${qualifyName(node)}>` : ""; 
    
    return t;
}


let SL = XmlDocument.fromString(docTxt /*.replace(/>\s+</g, '><')*/);

let SL_SCHEMA = {},
    SCHEMA_PREFIX = SL.root.namespacePrefix,
    SCHEMA_NAMESPACE = SL.root.namespaceUri;

SL_SCHEMA[SCHEMA_PREFIX] = SCHEMA_NAMESPACE;
if (SCHEMA_PREFIX == "") {
    SCHEMA_PREFIX = "__RANDOM__";
    SL_SCHEMA[SCHEMA_PREFIX] = SCHEMA_NAMESPACE;
    SL.root.addNsDeclaration(SCHEMA_NAMESPACE, SCHEMA_PREFIX);
}

let svc = SL.get('//__RANDOM__:Service', SL_SCHEMA)
console.dir(svc);

let x = PrettyPrint(svc)

console.log("------------------")
console.log(x)
