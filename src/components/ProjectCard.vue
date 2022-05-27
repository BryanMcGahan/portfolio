<template>
  <div
    class="
      h-80
      w-72
      mb-4
      bg-primary
      rounded-md
      border-light border-2
      shadow-light shadow-solid1
      duration-500
      relative
    "
  >
    <div id="content" class="px-2 py-1">
      <div id="header" class="text-center mb-5">
        <p class="text-lg font-extrabold text-light border-b-2 border-light">
          {{ project.title }}
        </p>
      </div>
      <div id="body">
        <p class="text-sm font-medium text-light/90 indent-4 text-justify mx-5">
          {{ project.description }}
        </p>
      </div>
      <div id="footer" class="flex flex-col justify-evenly mt-6 space-y-8">
        <div class="flex flex-row mt-4 space-x-4 justify-center">
          <div
            class="
              border-dark border-2
              rounded-md
              shadow-solid1 shadow-dark
              bg-light
              px-2
              py-1
            "
            v-for="tech in project.tech"
            :key="tech"
          >
            <p class="text-sm text-dark font-medium">{{ tech }}</p>
          </div>
        </div>
        <div class="flex flex-row justify-evenly">
          <a :href="project.site" target="_blank" rel="noopener noreferrer">
            <div
              class="
                bg-light
                p-2
                rounded-md
                border-2 border-dark
                shadow-solid1 shadow-dark
                hover:transition hover:duration-200 hover:ease-in
                ease-out
                hover:-translate-y-1
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#19323C"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                />
              </svg>
            </div>
          </a>
          <a :href="project.code" target="_blank" rel="noopener noreferrer">
            <div
              class="
                bg-light
                p-2
                rounded-md
                border-2 border-dark
                shadow-solid1 shadow-dark
                hover:transition hover:duration-200 hover:ease-in
                ease-out
                hover:-translate-y-1
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#19323C"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                  <path
                    d="M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18L4,18V6h5.17 l2,2H20V18z M18,12H6v-2h12V12z M14,16H6v-2h8V16z"
                  />
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>