<script>
import NavBar from "./components/NavBar.vue";
import ProjectCard from "./components/ProjectCard.vue";
import projects from "./data/projects.json";
export default {
  components: {
    NavBar,
    ProjectCard,
  },

  data() {
    return {
      projects,
    };
  },
};
</script>

<template>
  <div id="app" class="container mx-auto rounded-md py-2 px-4">
    <NavBar />
    <div class="flex flex-col gap-4">
      <div
        class="
          flex flex-col
          md:flex-row
          space-x-0
          md:space-x-4
          space-y-4
          md:space-y-0
        "
      >
        <div
          class="
            md:basis-2/3
            grid
            text-center
            content-center
            bg-primary
            border-2 border-dark
            shadow-solid1 shadow-dark
            rounded-md
            text-4xl
            md:text-6xl
            font-extrabold
            text-light
            py-5
            px-4
          "
        >
          <p class="">
            Welcome <br />
            I am <br />
            Bryan <br />
            McGahan
          </p>
        </div>
        <div
          class="
            md:basis-1/3
            flex
            justify-center
            bg-light
            border-2 border-dark
            col-span-1
            rounded-md
            shadow-solid1 shadow-dark
          "
        >
          <img
            src="./assets/memoji.png"
            alt=""
            class="
              relative
              bottom-[-1.55rem]
              sm:bottom-[-1.55rem]
              md:bottom-[-1.15rem]
              lg:bottom-[-1.25rem]
            "
          />
        </div>
      </div>
      <div
        class="
          bg-dark
          border-2 border-primary
          shadow-solid1 shadow-primary
          rounded-md
          flex flex-col
          gap-4
          py-5
          px-4
        "
      >
        <div class="text-center mb-5">
          <p class="text-5xl font-extrabold text-primary">Projects</p>
        </div>
        <div class="flex flex-row space-x-4  overflow-x-auto">
          <!-- Project Cards Here Use Components -->
          <div class="" v-for="project in projects" :key="project">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
