import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import api from "./services/api";

/**
 * Não possuem valor semântico (significado)
 * Não possuem estilização própria.
 * Todos componentes possuem por padrão "display: flex"
 *
 * View: div, footer, reader, main, aside, section...
 * Text: p, span, strong, h1, h2, h3
 *
 */

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post("projects", {
      title: `Novo projeto ${Date.now()}`,
      owner: `Diego Fernandes`,
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  // return <View style={styles.container} />;
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Hello GoStack</Text>
    // </View>
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      {/* <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack</Text>
        {projects.map((project) => (
          <Text style={styles.project} key={project.id}>
            {project.title}
          </Text>
        ))}
      </View> */}

      {/* <ScrollView style={styles.container}>
        <Text style={styles.title}>Hello GoStack</Text>
        {projects.map((project) => (
          <Text style={styles.project} key={project.id}>
            {project.title}
          </Text>
        ))}
      </ScrollView> */}
      <SafeAreaView style={styles.container2}>
        <FlatList
          // style={styles.container2}
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
  },

  container2: {
    flex: 1,
    backgroundColor: "#7159c1",
  },

  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  project: {
    color: "#FFF",
    fontSize: 20,
  },

  button: {
    backgroundColor: "#FFF",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
