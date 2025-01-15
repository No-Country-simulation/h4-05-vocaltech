package vocaltech.demo.security.filter;

import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.http.HttpHeaders;
import vocaltech.demo.security.utils.JwtUtils;

import java.io.IOException;
import java.util.Collection;
import java.util.Collections;
import java.util.Map;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private JwtUtils jwtUtils;

    public JwtAuthenticationFilter(JwtUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }
        final String jwtToken = authHeader.substring(7);

        DecodedJWT decodedJWT = jwtUtils.validateToken(jwtToken);

        String username = jwtUtils.extractUsername(decodedJWT);
        String stringAuthorities = jwtUtils.getSpecificClaim(decodedJWT, "authorities").asString();

        Collection<? extends GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList(stringAuthorities);

        SecurityContext context = SecurityContextHolder.createEmptyContext();
        Authentication authenticationToken = new UsernamePasswordAuthenticationToken(
                username, null, authorities
        );

        context.setAuthentication(authenticationToken);
        SecurityContextHolder.setContext(context);
    }
}